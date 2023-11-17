import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const url = process.env.EXPO_PUBLIC_SUPABASE_URL
const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

// Initialize the Supabase client
const supabase = createClient(url, key, {
    auth: {
        storage: AsyncStorage,
        detectSessionInUrl: false,
    },
})

export const getPizzaPlaces = async (latitude, longitude) => {
    try {
        const { data, error } = await supabase
            .from('pizzaPlace')
            .select('*')
            .limit(25)

        if (error) {
            console.error('Error fetching data:', error.message)
            return
        }

        return data
    } catch (error) {
        console.error('Error:', error.message)
    }
}
