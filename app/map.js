import React, { useContext } from 'react'
import MapView from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps'
import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import { TastyContext } from '../tastyContext'
import Item from '../components/Item'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    customView: {
        // width: 380,
        // height: 300,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default function Map() {
    const { pizzaPlaces, location } = useContext(TastyContext)

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {location.coords && pizzaPlaces.length > 0 && (
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
                        {pizzaPlaces.map((item, i) => {
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
