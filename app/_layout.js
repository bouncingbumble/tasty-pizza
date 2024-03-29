import { Tabs } from 'expo-router/tabs'
import ListIcon from '../assets/ListIcon'
import MapIcon from '../assets/MapIcon'
import { useFonts } from 'expo-font'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import PizzaIcon from '../assets/PizzaIcon'
import { getPizzaPlaces } from '../api'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { TastyContext } from '../tastyContext'

export default function AppLayout() {
    const [fontsLoaded] = useFonts({
        'Nanum Gothic': require('../assets/fonts/NanumGothic-Regular.ttf'),
        'Nanum Gothic Bold': require('../assets/fonts/NanumGothic-Bold.ttf'),
        Damion: require('../assets/fonts/Damion-Regular.ttf'),
    })

    const [pizzaPlaces, setPizzaPlaces] = useState([])
    const [location, setLocation] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getLocation = async () => {
            try {
                let { status } =
                    await Location.requestForegroundPermissionsAsync()

                if (status !== 'granted') {
                    alert(
                        'Location permission denied :( You will need to allow location in order for tasty to work its magic.'
                    )
                    return
                }

                let location = await Location.getCurrentPositionAsync({})
                setLocation(location)
                return location
            } catch (error) {
                console.log(error)
                alert('Error requesting location permission:')
            }
        }

        getLocation().then((location) =>
            getPizzaPlaces({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })
                .then((data) => {
                    setPizzaPlaces(data)
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 1500)
                })
                .catch((err) => {
                    console.log(err)
                })
        )
    }, [])

    useEffect(() => {
        if (refetch === true) {
            if (location !== null) {
                setIsLoading(true)
                getPizzaPlaces({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }).then((data) => {
                    setPizzaPlaces(data)
                    setRefetch(false)
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 1500)
                })
            }
        }
    }, [refetch])

    return (
        fontsLoaded && (
            <>
                <GeneralStatusBarColor
                    backgroundColor="#a42229"
                    barStyle="light-content"
                />
                <TastyContext.Provider
                    value={{
                        pizzaPlaces,
                        location,
                        setRefetch: (value) => setRefetch(value),
                        isLoading,
                    }}
                >
                    <Tabs
                        screenOptions={{
                            tabBarStyle: {
                                backgroundColor: '#a42229',
                                paddingVertical: 16,
                                borderTopWidth: 0,
                            },
                        }}
                    >
                        <Tabs.Screen
                            // Name of the route to hide.
                            name="index"
                            options={{
                                // This tab will no longer show up in the tab bar.
                                href: null,
                            }}
                        />
                        <Tabs.Screen
                            name="list"
                            options={{
                                headerShown: false,
                                tabBarLabel: '',
                                tabBarIcon: () => <ListIcon />,
                                tabBarIconStyle: { marginBottom: -8 },
                            }}
                            isLoading={isLoading}
                        />
                        <Tabs.Screen
                            name="map"
                            options={{
                                headerShown: false,
                                tabBarLabel: '',
                                tabBarIcon: () => <MapIcon />,
                                tabBarIconStyle: { marginBottom: -8 },
                            }}
                        />
                        <Tabs.Screen
                            name="info"
                            options={{
                                headerShown: false,
                                tabBarLabel: '',
                                tabBarIcon: () => <PizzaIcon />,
                                tabBarIconStyle: { marginBottom: -8 },
                            }}
                        />
                    </Tabs>
                </TastyContext.Provider>
            </>
        )
    )
}
