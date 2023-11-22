import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'isDeliveryOnly'

export const getPizzaPlaces = async ({ latitude, longitude }) => {
    try {
        let isDeliveryOnly = false
        try {
            isDeliveryOnly = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY))
        } catch (error) {
            console.log(error)
        }

        let res = await axios({
            method: 'post',
            url:
                process.env.EXPO_PUBLIC_BACKEND_ENDPOINT +
                '/api/v1/pizzaPlaces',
            data: {
                latitude,
                longitude,
            },
        })

        const places = res.data.filter((p) => {
            if (isDeliveryOnly) {
                if (p.transactions.includes('delivery')) {
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        })
        console.log(places.length)
        return places
    } catch (error) {
        console.error('Error')
    }
}
