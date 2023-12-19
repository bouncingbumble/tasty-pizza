import { createContext } from 'react'

export const TastyContext = createContext({
    pizzaPlaces: [],
    location: null,
    isLoading: false,
})
