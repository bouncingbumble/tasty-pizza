import { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    ImageBackground,
    Switch,
} from 'react-native'
import pizalgorithmBg from '../assets/tastyPizzaInfo.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    bg: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    motto: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 88,
    },
    text: {
        color: '#316134',
        fontFamily: 'Nanum Gothic Bold',
        letterSpacing: 1.2,
        lineHeight: 20.2,
        textAlign: 'center',
    },
    toggleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
    },
    sliderBox: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '60%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

const STORAGE_KEY = 'isDeliveryOnly'

export default function Info() {
    const [isDeliveryOnly, setIsDeliveryOnly] = useState(false)

    useEffect(() => {
        getIsDelieveryOnly()
    }, [])

    const getIsDelieveryOnly = async () => {
        try {
            let bool = await AsyncStorage.getItem(STORAGE_KEY)
            setIsDeliveryOnly(Boolean(bool))
        } catch (error) {
            alert(error)
        }
    }

    const handleToggleSwitch = async () => {
        try {
            await AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(!isDeliveryOnly)
            )
            setIsDeliveryOnly(!isDeliveryOnly)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={pizalgorithmBg}
                resizeMode="cover"
                style={styles.bg}
            >
                <View style={styles.motto}>
                    <Text style={styles.text}>
                        Using a complex pizzalgorithm, our experts at tasty are
                        able to determine the highest quality pizza available
                        {'\n'}in your local area. {'\n'}When using tasty.pizza,
                        you'll only be shown the best of the best.
                    </Text>
                    <Text style={{ height: 48 }}></Text>
                    <View style={styles.toggleBox}>
                        <Text
                            style={{
                                marginRight: 16,
                                color: '#316134',
                                fontFamily: 'Nanum Gothic Bold',
                            }}
                        >
                            Delivery Only
                        </Text>
                        <Switch
                            trackColor={{ false: '#316134', true: '#a42229' }}
                            thumbColor={isDeliveryOnly ? '#f1af4d' : '#fef0d3'}
                            ios_backgroundColor="#316134"
                            onValueChange={handleToggleSwitch}
                            value={isDeliveryOnly}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
