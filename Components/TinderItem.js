import { Text, StyleSheet, View, Pressable, Image, Linking } from 'react-native'
import CompassIcon from '../assets/CompassIcon'
import LinkIcon from '../assets/LinkIcon'
import { getDistance, convertDistance } from 'geolib'
import open from 'react-native-open-maps'
import tastyPizzaDefault from '../assets/tastyPizzaDefault.png'
import InfoIcon from '../assets/InfoIcon'
import PizzaIcon from '../assets/PizzaIcon'
import SquarePinIcon from '../assets/SquarePinIcon'
import StarIcon from '../assets/StarIcon'
import HalfStarIcon from '../assets/HalfStarIcon'

export default function TinderItem({
    name,
    imageUrl,
    address,
    website,
    latitude,
    longitude,
    userLocation,
    reviewCount,
    rating,
}) {
    const styles = StyleSheet.create({
        item: {
            flex: 1,
            width: '100%',
        },
        name: {
            fontSize: 24,
            color: '#000',
            fontFamily: 'Nanum Gothic Bold',
        },
        addressContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 16,
        },
        address: {
            fontFamily: 'Nanum Gothic',
        },
        addressLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        distance: {
            marginLeft: 12,
            fontFamily: 'Nanum Gothic',
        },
        linkIcon: {
            height: 16,
            width: 16,
        },
        pic: {
            height: 480,
            width: '100%',
        },
        detailsContainer: {
            paddingTop: 8,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 32,
        },
    })

    return (
        <View style={styles.item}>
            <Image
                source={
                    imageUrl.length > 0
                        ? {
                              uri: imageUrl,
                          }
                        : tastyPizzaDefault
                }
                style={styles.pic}
            ></Image>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingRight: 20,
                }}
            >
                <View
                    style={{
                        height: 48,
                        width: 48,
                        backgroundColor: '#fff',
                        borderRadius: '25%',
                        marginTop: -24,
                        marginRight: 12,
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        paddingTop: 12,
                        paddingBottom: 12,
                    }}
                >
                    <Pressable
                        onPress={async () => await Linking.openURL(website)}
                    >
                        <InfoIcon />
                    </Pressable>
                </View>
                <View
                    style={{
                        height: 48,
                        width: 48,
                        backgroundColor: '#fff',
                        borderRadius: '25%',
                        marginTop: -24,
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        padding: 12,
                    }}
                >
                    {address && (
                        <Pressable
                            onPress={() =>
                                open({
                                    end: address,
                                })
                            }
                        >
                            <SquarePinIcon />
                        </Pressable>
                    )}
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    {rating > 0.5 && (
                        <View style={{ height: 24, width: 24 }}>
                            <StarIcon />
                        </View>
                    )}
                    {rating > 1.5 && (
                        <View style={{ height: 24, width: 24 }}>
                            <StarIcon />
                        </View>
                    )}
                    {rating > 2.5 && (
                        <View style={{ height: 24, width: 24 }}>
                            <StarIcon />
                        </View>
                    )}
                    {rating > 3.5 && (
                        <View style={{ height: 24, width: 24 }}>
                            <StarIcon />
                        </View>
                    )}
                    {rating > 4.5 && (
                        <View style={{ height: 24, width: 24 }}>
                            <StarIcon />
                        </View>
                    )}
                    {rating.toString().includes('.5') && (
                        <View style={{ height: 24, width: 24 }}>
                            <HalfStarIcon />
                        </View>
                    )}
                    <Text
                        style={{
                            marginLeft: !rating.toString().includes('.5')
                                ? 12
                                : 0,
                            fontSize: 16,
                            fontFamily: 'Nanum Gothic',
                            lineHeight: 28,
                        }}
                    >
                        {reviewCount + ' reviews'}
                    </Text>
                </View>
                {address && (
                    <View style={styles.addressContainer}>
                        <View style={styles.addressLeft}>
                            <View
                                style={{
                                    height: 24,
                                    width: 24,
                                    marginLeft: 4,
                                }}
                            >
                                <CompassIcon />
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
                            {address && (
                                <Text style={styles.address}>
                                    {' - '}
                                    {address}
                                </Text>
                            )}
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}
