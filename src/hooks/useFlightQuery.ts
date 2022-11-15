import useFetchFlight from "./useFetchFlight"
import { useQuery } from 'react-query'

const useFlightQuery = () => {
    const { fetchFlights } = useFetchFlight()
    const { data, error, isError, isLoading } = useQuery('flights', fetchFlights)

    return {
        data, 
        error, 
        isError, 
        isLoading
    }
}

export default useFlightQuery