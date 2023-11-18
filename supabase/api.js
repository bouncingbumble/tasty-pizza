import axios from 'axios'

export const getPizzaPlaces = async ({ latitude, longitude }) => {
    console.log(latitude)
    console.log(longitude)
    console.log(process.env.EXPO_PUBLIC_BACKEND_ENDPOINT)
    try {
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

        return res.data
    } catch (error) {
        console.error('Error')
    }
}
