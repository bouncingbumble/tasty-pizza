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

        const places = res.data.filter((p) => {
            if (
                p.rating >= 3.5 &&
                p.transactions.includes('pickup') &&
                p.transactions.includes('delivery') &&
                p.review_count > 10
            ) {
                return true
            } else {
                return false
            }
        })

        return places
    } catch (error) {
        console.error('Error')
    }
}
