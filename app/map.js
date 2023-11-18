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
            console.log(location.coords)
            getPizzaPlaces({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            }).then((data) => {
                setData(data)
                console.log(data)
            })
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
                            return (
                                <Marker
                                    key={i}
                                    coordinate={{
                                        latitude: item.coordinates.latitude,
                                        longitude: item.coordinates.longitude,
                                    }}
                                >
                                    <Image
                                        source={require('../assets/pizza-stand.png')}
                                        style={{
                                            height: 24,
                                            width: 24,
                                        }}
                                    />
                                    <Callout tooltip style={styles.customView}>
                                        <Item
                                            name={item.name}
                                            imageUrl={item.image_url}
                                            address={item.location.address1}
                                            website={item.url}
                                            longitude={
                                                item.coordinates.longitude
                                            }
                                            latitude={item.coordinates.latitude}
                                            userLocation={location.coords}
                                        />
                                    </Callout>
                                </Marker>
                            )
                        })}
                    </MapView>
                )}
            </View>
        </SafeAreaView>
    )
}
