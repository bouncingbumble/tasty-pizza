import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    ImageBackground,
    Switch,
} from 'react-native'
import pizalgorithmBg from '../assets/pizalgorithm-bg.png'
import { useState } from 'react'

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
        paddingRight: 56,
        paddingLeft: 56,
    },
    text: {
        color: '#316134',
        fontFamily: 'Nanum Gothic Bold',
        letterSpacing: 1.2,
        lineHeight: 20.2,
        textAlign: 'center',
        marginBottom: 160,
    },
    toggleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
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

export default function Info() {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
    const [minRating, setMinRating] = useState(4)

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
                        able to determine the highest quality pizza available in
                        your local area. When using tasty.pizza, you'll only be
                        shown the best of the best.
                    </Text>
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
                            thumbColor={isEnabled ? '#f1af4d' : '#fef0d3'}
                            ios_backgroundColor="#316134"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
