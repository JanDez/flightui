import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"
import RouteFilter from "./RouteFilter"
import ActionBtn from "../ActionBtn"
import { ChangeEvent } from "react"

interface FlightSearchFormProps {
    optionsList: any[]
    minPriceStr: string 
    maxPriceStr: string
    origin: string 
    destination: string 
    day: string 
    month: string 
    year: string 
    handleChangePrice: (e: ChangeEvent<HTMLInputElement>) => void
    handleSelectRoute: (e: ChangeEvent<HTMLSelectElement>) => void
    handleChangeDate: (e: ChangeEvent<HTMLInputElement>) => void
    handleFilter: () => void
}

const FlightSearchForm = ({ 
        day, month, year,
        minPriceStr, maxPriceStr, 
        optionsList, 
        destination,
        origin,
        handleChangeDate,
        handleChangePrice, 
        handleSelectRoute,
        handleFilter
    }: FlightSearchFormProps) => {

    return (
        <div className="flight-form-container">
            <form className="flight-form">
                <div className="price-filter">
                    <PriceFilter
                        minPriceStr={minPriceStr}
                        maxPriceStr={maxPriceStr} 
                        onChange={handleChangePrice} />
                </div>
                <div className="route-filter">
                    <RouteFilter 
                        origin={origin}
                        destination={destination} 
                        optionsList={optionsList} 
                        onChange={handleSelectRoute} />
                </div>
                <div className="date-filter">
                    <DateFilter
                        day={day}
                        month={month}
                        year={year}
                        onChange={handleChangeDate} />
                </div>
                <div className="control-btns">
                    <ActionBtn text="Search" action={handleFilter} />
                </div>
            </form>
        </div>
    )
}

export default FlightSearchForm