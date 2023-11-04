import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Pressable,
    ImageBackground,
    StatusBar,
} from 'react-native'
import pizzaPlaces from '../assets/pizza-places.json'
import CompassIcon from '../assets/CompassIcon'
import GeneralStatusBarColor from '../Components/GeneralStatusBarColor'

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
    },
    address: {
        color: '#f1af4d',
        marginLeft: 8,
        fontFamily: 'Nanum Gothic Bold',
    },
    mapIcon: {
        height: 24,
        width: 24,
        backgroundColor: '#a42229',
        borderRadius: '23%',
    },
    separator: {
        backgroundColor: '#316134',
        height: 6,
    },
})

const DATA = pizzaPlaces

const Item = ({ name, imageUrl, address }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.card}>
            <ImageBackground
                source={{
                    uri: imageUrl,
                }}
                resizeMode="cover"
                style={styles.pic}
                borderRadius={16}
            ></ImageBackground>
            <View style={styles.addressContainer}>
                <View style={styles.mapIcon}>
                    <CompassIcon />
                </View>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
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
                        <Item
                            name={item.name}
                            imageUrl={item.image_url}
                            address={item.location.address1}
                        />
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={<View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}
