import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps'
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native'
import * as Location from 'expo-location'
import { Item } from './list'
import { getPizzaPlaces } from '../supabase/api'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    customView: {
        width: 380,
        height: 300,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default function Map() {
    const [location, setLocation] = useState('')
    const [data, setData] = useState('')

    useEffect(() => {
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
            } catch (error) {
                alert('Error requesting location permission:')
            }
        }

        getLocation()
    }, [])

    useEffect(() => {
        if (location !== '') {
            getPizzaPlaces().then((data) => setData(data))
        }
    }, [location])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {location.coords && data.length > 0 && (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    >
                        {data.map((item, i) => {
                            if (item.latitude && item.longitude) {
                                return (
                                    <Marker
                                        key={i}
                                        coordinate={{
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/pizza-stand.png')}
                                            style={{
                                                height: 24,
                                                width: 24,
                                            }}
                                        />
                                        <Callout
                                            tooltip
                                            style={styles.customView}
                                        >
                                            <Item
                                                name={item.name}
                                                imageUrl={item.imageUrl}
                                                address={item.location}
                                                website={item.url}
                                                longitude={item.longitude}
                                                latitude={item.latitude}
                                                userLocation={location.coords}
                                            />
                                        </Callout>
                                    </Marker>
                                )
                            }
                        })}
                    </MapView>
                )}
            </View>
        </SafeAreaView>
    )
}
