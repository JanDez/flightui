import { ChangeEvent } from "react"
import SelectField from "../form/SelectField"

interface RouteFilterProps {
    origin: string 
    destination: string 
    optionsList: string[]
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const RouteFilter = ({ origin, destination, optionsList, onChange }: RouteFilterProps) => {
    return (
        <div className="route-filter-container">
            <div className="route-filter">
                <div className="origin-field-container">
                    <SelectField 
                        id="origin"
                        label="Origin"
                        value={origin}
                        options={optionsList}
                        onChange={onChange} />
                </div>
                <div className="destiny-field-container">
                    <SelectField
                        id="destination"
                        label="Destination"
                        value={destination}
                        options={optionsList}
                        onChange={onChange} />
                </div>
            </div>
        </div>
    )
}

export default RouteFilter