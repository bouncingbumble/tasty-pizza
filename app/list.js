import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import { useContext } from 'react'
import { TastyContext } from '../tastyContext'
import TinderItem from '../components/TinderItem'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    separator: {
        backgroundColor: '#316134',
        height: 6,
    },
})

export default function List() {
    const { pizzaPlaces, location } = useContext(TastyContext)

    return (
        <SafeAreaView style={styles.container}>
            {pizzaPlaces.length !== 0 && (
                <FlatList
                    data={pizzaPlaces}
                    renderItem={({ item }) => (
                        <TinderItem
                            name={item.name}
                            imageUrl={item.image_url}
                            address={item.location.address1}
                            website={item.url}
                            longitude={item.coordinates.longitude}
                            latitude={item.coordinates.latitude}
                            userLocation={location.coords}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={<View style={styles.separator} />}
                />
            )}
        </SafeAreaView>
    )
}
