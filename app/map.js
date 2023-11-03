import MapView from 'react-native-maps'
import { StyleSheet, View, SafeAreaView } from 'react-native'

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
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
