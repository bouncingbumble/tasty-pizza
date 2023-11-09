import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import pizzaPlaces from '../assets/pizza-places.json'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})

export default function Map() {
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
                                    title={place.name}
                                    pinColor={'#ffd1dc'}
                                />
                            )
                        }
                    })}
                </MapView>
            </View>
        </SafeAreaView>
    )
}
