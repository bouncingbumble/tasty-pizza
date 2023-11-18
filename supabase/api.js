import axios from 'axios'

export const getPizzaPlaces = async ({ latitude, longitude }) => {
    console.log(latitude)
    console.log(longitude)
    try {
        let res = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/v1/pizzaPlaces',
            data: {
                latitude,
                longitude,
            },
        })

        return res.data
    } catch (error) {
        console.error('Error:', error.message)
    }
}
