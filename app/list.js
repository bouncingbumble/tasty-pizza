import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { TastyContext } from '../tastyContext'
import TinderItem from '../components/TinderItem'
import LottieView from 'lottie-react-native'
import loadTastyPizza from '../assets/tastyPizzaLoading.json'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a42229',
    },
    noPizzaContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    noPizzaText: {
        fontFamily: 'Damion',
        color: '#FEF0D3',
        fontSize: 42,
        padding: 48,
        textAlign: 'center',
        letterSpacing: 1.2,
    },
})

export default function List() {
    const { pizzaPlaces, location, isLoading, setRefetch } =
        useContext(TastyContext)

    const NoPizza = () => (
        <View style={styles.noPizzaContainer}>
            <Text style={styles.noPizzaText}>
                Couldn't find any tasty pizza :(
            </Text>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && (
                <LottieView
                    source={loadTastyPizza}
                    autoPlay
                    loop
                    speed={1}
                    style={{ flex: 1, width: 400, height: 400 }}
                />
            )}

            {!isLoading && (
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
                    style={{
                        backgroundColor:
                            pizzaPlaces.length === 0 ? '#a42229' : '#FFF',
                    }}
                    onRefresh={() => setRefetch(true)}
                    refreshing={isLoading}
                    ListEmptyComponent={NoPizza}
                />
            )}
        </SafeAreaView>
    )
}
