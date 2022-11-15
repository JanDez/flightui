import { FlightData } from "../../core/types"
import PlaneIcon from "../icons/PlaneIcon"

interface FlightInfoProps {
    data: FlightData
}

const FlightInfo = ({ data }: FlightInfoProps) => {
    return (
        <div className="flight-info-container">
            <div className="flight-info">   
                <div className="container">
                    <PlaneIcon />
                </div>
                <div className="container">
                    <p className="description">Origin: </p>
                    <p className="text">{data.origin}</p>
                </div>
                <div className="container">
                    <p className="description">Destination:</p>
                    <p className="text">{data.destination}</p>
                </div>
                <div className="container">
                    <p className="description">Price: </p>
                    <p className="text">{data.price}$</p>
                </div>
                <div className="container">
                    <p className="description">Date: </p>
                    <p className="text">{data.date}</p>
                </div>
                <div className="container">
                    <p className="description">Availability: </p>
                    <p className="text">{data.availability}</p>
                </div>
            </div>
        </div>
    )
}

export default FlightInfo