import { FlightData } from "../../core/types"
import FlightInfo from "./FlightInfo"

interface FlightListProps {
    list: FlightData[]
}

const FlightList = ({ list }: FlightListProps) => {
    return (
        <div className="flight-list-container">
            {list.length > 0 && 
                <ul className="flight-list">    
                    {list.map((item, index) => 
                        <li className="flight-item" key={index}>
                            <FlightInfo data={item} />
                        </li>
                    )}
                </ul>}
            {list.length === 0 && <p className="no-text">Found 0 flights</p> }
        </div>
    )
}

export default FlightList