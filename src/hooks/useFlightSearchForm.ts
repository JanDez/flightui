import { ChangeEvent } from "react"
import useFlightSearchData from "./useFlightSearchData"

const useFlightSearchForm = () => {
    const { 
        origin, setOrigin,
        destination, setDestination,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        maxPriceStr, setMaxPriceStr,
        minPriceStr, setMinPriceStr,
        year, setYear,
        month, setMonth,    
        day, setDay, 
    } = useFlightSearchData()

    const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'day') return setDay(e.target.value)

        if (e.target.id === 'month') return setMonth(e.target.value)

        if (e.target.id === 'year') return setYear(e.target.value)
    }

    const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value)

        if (isNaN(value)) {
            if (e.target.id === 'min') {
                setMinPriceStr(e.target.value)
                setMinPrice(0)
            }
            else {
                setMaxPriceStr(e.target.value)
                setMaxPrice(1000)
            }

            return 
        }

        if (e.target.id === 'min') {
            setMinPriceStr(e.target.value)
            setMinPrice(value)
        }
        else {
            setMaxPriceStr(e.target.value)
            setMaxPrice(value)
        }
    }

    const handleSelectRoute = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.id)
        if (e.target.id === 'origin')
            setOrigin(e.target.value)
        else 
            setDestination(e.target.value)
    }

    return {
        origin, 
        destination,
        minPrice, 
        minPriceStr,
        maxPriceStr,
        maxPrice, 
        year, 
        month, 
        day,
        handleChangeDate,
        handleChangePrice,
        handleSelectRoute
    }
}

export default useFlightSearchForm