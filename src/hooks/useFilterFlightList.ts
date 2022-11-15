import { useEffect, useState } from "react"
import { FlightData } from "../core/types"

interface UseFilterFlightListProps {
    data: FlightData[] | undefined
    origin: string 
    destination: string 
    day: string 
    month: string 
    year: string 
    minPrice: number 
    maxPrice: number
}

const useFilterFlightList = ({
    data,
    origin, destination,
    day, month, year,
    minPrice, maxPrice
}: UseFilterFlightListProps) => {

    const factor = 5
    const [filteredList, setFilteredList] = useState<FlightData[]>([])
    const [paginatedList, setPaginatedList] = useState<FlightData[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState(0)

    const checkPrice = (flight: FlightData) => {
        if (flight.price >= minPrice && flight.price <= maxPrice)
            return true 
        
        return false
    }

    const checkRoute = (flight: FlightData) => {
        if (flight.origin === origin && flight.destination === destination) 
            return true

        return false
    }

    const checkDate = (flight: FlightData) => {
        const fyear = flight.date.slice(0, 4)
        const fmonth = flight.date.slice(5, 7)
        const fday = flight.date.slice(8, 10)

        if (fday === day && fmonth === month && fyear === year)
            return true

        return false
    }

    const handleFilter = () => {
        if (data) {
            const nfilteredList = [...data].filter(flight => {
                if (checkDate(flight) && checkRoute(flight) && checkPrice(flight))
                    return true 
                
                return false
            }) 

            console.log(nfilteredList)

            const npaginatedList = paginateList(nfilteredList)

            setFilteredList(nfilteredList)
            setPaginatedList(npaginatedList)
            setNumberOfPages(Math.ceil(nfilteredList.length / factor))
            setCurrentPage(1)
        }
    }

    const paginateList = (list: FlightData[]) => {
        const nlist = [...list].splice(0, factor + 1)

        return nlist
    }

    const goToPage = (page: number) => {
        const start = (page - 1) * factor
        const end = start + factor

        const npaginatedList = [...filteredList].slice(start, end)

        setPaginatedList(npaginatedList)
        setCurrentPage(page)
    }

    useEffect(() => {
        if (data) {
            setCurrentPage(1)

            const nfilteredList = [...data].map((flight: FlightData) => flight).slice(0, 100)
            const npaginatedList = paginateList(nfilteredList)

            setFilteredList(nfilteredList)
            setPaginatedList(npaginatedList)
            setNumberOfPages(Math.ceil(nfilteredList.length / factor))
        }
    }, [ data ])

    return {
        currentPage,
        numberOfPages,
        paginatedList,
        goToPage,
        handleFilter
    }
}

export default useFilterFlightList