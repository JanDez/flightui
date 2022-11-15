import { places } from "../../core/types"
import useFilterFlightList from "../../hooks/useFilterFlightList"
import useFlightQuery from "../../hooks/useFlightQuery"
import useFlightSearchForm from "../../hooks/useFlightSearchForm"
import Pagination from "../common/Pagination"
import FlightList from "../flight/FlightList"
import FlightSearchForm from "../flight/FlightSearchForm"

const Content = () => {
    const {
        origin, destination,
        minPrice, maxPrice,
        minPriceStr, maxPriceStr,
        year, month, day,
        handleChangePrice,
        handleChangeDate,
        handleSelectRoute
    } = useFlightSearchForm()

    const {data, error, isError, isLoading} = useFlightQuery()
    const { paginatedList, goToPage, numberOfPages, currentPage, handleFilter } = useFilterFlightList({
        data, 
        minPrice, maxPrice,
        origin, destination,
        day, month, year
    })

    return (
        <div className="content-container">
            <div className="content x-container">
                <FlightSearchForm 
                    minPriceStr={minPriceStr}
                    maxPriceStr={maxPriceStr}
                    day={day}
                    month={month}
                    year={year}
                    origin={origin}
                    destination={destination}
                    optionsList={places}
                    handleChangeDate={handleChangeDate}
                    handleChangePrice={handleChangePrice}
                    handleSelectRoute={handleSelectRoute}
                    handleFilter={handleFilter} />
                <FlightList list={paginatedList} />
                <Pagination 
                    activePage={currentPage}
                    numberOfPages={numberOfPages}
                    changePage={goToPage} />
            </div>
        </div>
    )
}

export default Content