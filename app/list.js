import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { useContext } from 'react'
import { TastyContext } from '../tastyContext'
import TinderItem from '../components/TinderItem'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default function List() {
    const { pizzaPlaces, location } = useContext(TastyContext)

    return (
        <SafeAreaView style={styles.container}>
            {pizzaPlaces ? (
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
                            reviewCount={item.review_count}
                            rating={item.rating}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text>Couldn't find any tasty pizza :(</Text>
            )}
        </SafeAreaView>
    )
}
