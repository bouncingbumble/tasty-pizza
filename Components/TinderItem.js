import {
    Text,
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
import tastyPizzaDefault from '../assets/tastyPizzaDefault.png'

export default function TinderItem({
    name,
    imageUrl,
    address,
    website,
    latitude,
    longitude,
    userLocation,
}) {
    const styles = StyleSheet.create({
        item: {
            flex: 1,
            width: '100%',
            height: 600,
            border: '1px solid red',
        },
        name: {
            fontSize: 20,
            color: '#000',
            fontFamily: 'Nanum Gothic Bold',
        },
        addressContainer: {
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
            height: 400,
            width: '100%',
            marginTop: 12,
            marginBottom: 12,
        },
    })

    return (
        <View style={styles.item}>
            <View>
                <View
                    style={{
                        height: 224,
                        width: '100%',
                    }}
                >
                    <ImageBackground
                        source={
                            imageUrl.length > 0
                                ? {
                                      uri: imageUrl,
                                  }
                                : tastyPizzaDefault
                        }
                        resizeMode="cover"
                        style={styles.pic}
                    ></ImageBackground>
                </View>
                <View>
                    <Pressable
                        onPress={async () => await Linking.openURL(website)}
                    >
                        <Text style={styles.name}>
                            {name}
                            <View style={styles.linkIcon}>
                                <LinkIcon />
                            </View>
                        </Text>
                    </Pressable>
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
