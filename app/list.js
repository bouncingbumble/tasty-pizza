import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Pressable,
    ImageBackground,
    Linking,
} from 'react-native'
import pizzaPlaces from '../assets/pizza-places.json'
import CompassIcon from '../assets/CompassIcon'
import LinkIcon from '../assets/LinkIcon'
import * as Location from 'expo-location'
import React, { useState, useEffect } from 'react'
import { getDistance, convertDistance } from 'geolib'
import open from 'react-native-open-maps'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pic: {
        flex: 1,
        height: 200,
        width: '100%',
        marginTop: 12,
        marginBottom: 12,
    },
    item: {
        flex: 1,
        padding: 12,
    },
    card: {},
    name: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Nanum Gothic Bold',
    },
    addressContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    address: {
        color: '#f1af4d',
        marginLeft: 8,
        fontFamily: 'Nanum Gothic',
    },
    addressLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distance: {
        paddingRight: 4,
        fontFamily: 'Nanum Gothic Bold',
        color: '#a42229',
    },
    mapIcon: {
        height: 24,
        width: 24,
        backgroundColor: '#a42229',
        borderRadius: '23%',
    },
    linkIcon: {
        height: 16,
        width: 16,
    },
    separator: {
        backgroundColor: '#316134',
        height: 6,
    },
})

const DATA = pizzaPlaces

const Item = ({ name, imageUrl, address, website, coords, userLocation }) => {
    return (
        <View style={styles.item}>
            <Pressable onPress={async () => await Linking.openURL(website)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.name}>{name} </Text>
                    <View style={styles.linkIcon}>
                        <LinkIcon />
                    </View>
                </View>
            </Pressable>
            <View style={styles.card}>
                <ImageBackground
                    source={{
                        uri: imageUrl,
                    }}
                    resizeMode="cover"
                    style={styles.pic}
                    borderRadius={16}
                ></ImageBackground>
                {address && (
                    <Pressable
                        onPress={() =>
                            open({
                                end: address,
                            })
                        }
                    >
                        <View style={styles.addressContainer}>
                            <View style={styles.addressLeft}>
                                <View style={styles.mapIcon}>
                                    <CompassIcon />
                                </View>
                                {address && (
                                    <Text style={styles.address}>
                                        {address}
                                    </Text>
                                )}
                            </View>
                            {coords && userLocation && (
                                <Text style={styles.distance}>
                                    {convertDistance(
                                        getDistance(
                                            {
                                                latitude: coords.latitude,
                                                longitude: coords.longitude,
                                            },
                                            userLocation
                                        ),
                                        'mi'
                                    )
                                        .toString()
                                        .slice(0, 3)}
                                    mi
                                </Text>
                            )}
                        </View>
                    </Pressable>
                )}
            </View>
        </View>
    )
}

export default function List() {
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
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                        name={item.name}
                        imageUrl={item.image_url}
                        address={item.location.address1}
                        website={item.url}
                        coords={item.coordinates}
                        userLocation={location.coords}
                    />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={<View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}
