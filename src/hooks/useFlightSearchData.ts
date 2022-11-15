import { useState } from "react"
import { places } from "../core/types"

const currentDate = new Date()

const useFlightSearchData = () => {
    const [origin, setOrigin] = useState(places[0])
    const [destination, setDestination] = useState(places[1])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [minPriceStr, setMinPriceStr] = useState('0')
    const [maxPriceStr, setMaxPriceStr] = useState('1000')
    const [year, setYear] = useState(currentDate.getFullYear()+'')
    const [month, setMonth] = useState(currentDate.getMonth() + 1 +'')
    const [day, setDay] = useState(currentDate.getDate()+'')

    return {
        origin, setOrigin,
        destination, setDestination,
        minPrice, setMinPrice,
        minPriceStr, setMinPriceStr,
        maxPriceStr, setMaxPriceStr,
        maxPrice, setMaxPrice,
        year, setYear,
        month, setMonth,
        day, setDay
    }
}

export default useFlightSearchData