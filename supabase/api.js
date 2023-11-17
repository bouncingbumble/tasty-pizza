import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const url = process.env.EXPO_PUBLIC_SUPABASE_URL
const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

// Initialize the Supabase client
export const supabase = createClient(url, key, {
    auth: {
        storage: AsyncStorage,
        detectSessionInUrl: false,
    },
})

export const handleQuery = async (table, query) => {
    const response = await supabase.query(table, query)
    if (response.error) {
        // Handle query error
        console.log(response.error)
    } else {
        // Handle successful query
        return response
    }
}
