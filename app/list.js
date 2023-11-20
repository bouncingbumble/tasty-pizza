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
import CompassIcon from '../assets/CompassIcon'
import LinkIcon from '../assets/LinkIcon'
import { getDistance, convertDistance } from 'geolib'
import open from 'react-native-open-maps'
import { useContext } from 'react'
import { TastyContext } from '../tastyContext'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    separator: {
        backgroundColor: '#316134',
        height: 6,
    },
})

export const Item = ({
    name,
    imageUrl,
    address,
    website,
    latitude,
    longitude,
    userLocation,
}) => {
    const styles = StyleSheet.create({
        item: {
            flex: 1,
            padding: 12,
        },
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
        pic: {
            flex: 1,
            height: 200,
            width: '100%',
            marginTop: 12,
            marginBottom: 12,
        },
    })

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
                <View
                    style={{
                        height: 224,
                        width: '100%',
                    }}
                >
                    <ImageBackground
                        source={{
                            uri: imageUrl.length > 0 && imageUrl,
                        }}
                        resizeMode="cover"
                        style={styles.pic}
                        borderRadius={16}
                    ></ImageBackground>
                </View>
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
                            {latitude && longitude && userLocation && (
                                <Text style={styles.distance}>
                                    {convertDistance(
                                        getDistance(
                                            {
                                                latitude,
                                                longitude,
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
    const { pizzaPlaces, location } = useContext(TastyContext)

    return (
        <SafeAreaView style={styles.container}>
            {pizzaPlaces.length !== 0 && (
                <FlatList
                    data={pizzaPlaces}
                    renderItem={({ item }) => (
                        <Item
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
