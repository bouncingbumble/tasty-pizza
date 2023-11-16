import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps'
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native'
import pizzaPlaces from '../assets/pizza-places.json'
import * as Location from 'expo-location'
import { Item } from './list'

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

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 33.96435,
                        longitude: -118.204412037037,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {pizzaPlaces.map((place, i) => {
                        if (
                            place.coordinates.latitude &&
                            place.coordinates.longitude
                        ) {
                            return (
                                <Marker
                                    key={i}
                                    coordinate={{
                                        latitude: place.coordinates.latitude,
                                        longitude: place.coordinates.longitude,
                                    }}
                                >
                                    <Image
                                        source={require('../assets/pizza-stand.png')}
                                        style={{ height: 24, width: 24 }}
                                    />
                                    <Callout tooltip style={styles.customView}>
                                        <Item
                                            name={place.name}
                                            imageUrl={place.image_url}
                                            address={place.location.address1}
                                            website={place.url}
                                            coords={place.coordinates}
                                            userLocation={location.coords}
                                        />
                                    </Callout>
                                </Marker>
                            )
                        }
                    })}
                </MapView>
            </View>
        </SafeAreaView>
    )
}
