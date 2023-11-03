import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Pressable,
} from 'react-native'
import pizzaPlaces from '../assets/pizza-places.json'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const DATA = pizzaPlaces

const Item = ({ name }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
    </View>
)

export default function List() {
    const onPressFunction = () => {
        alert('hello')
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Pressable onPress={onPressFunction}>
                        <Item name={item.name} />
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}
