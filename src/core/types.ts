export interface FlightData {
    date: string
    origin: string,
    destination: string,
    price: number,
    availability: number
}

export const places: Array<string> = [
    '',
    'COR',
    'MDZ',
    'BRC',
    'EPA'
]