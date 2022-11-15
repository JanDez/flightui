import { FlightData } from '../core/types';
import flightsData from '../data/dataset.json';

const useFetchFlight = () => {
    const fetchFlights = (): FlightData[] => flightsData.map(flight => flight)

    return {
        fetchFlights
    }
}

export default useFetchFlight