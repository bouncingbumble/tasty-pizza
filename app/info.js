import { StyleSheet, View, SafeAreaView, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})

export default function Info() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>pizalgorithm</Text>
            </View>
        </SafeAreaView>
    )
}
