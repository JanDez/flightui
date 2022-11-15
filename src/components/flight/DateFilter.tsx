import { ChangeEvent } from "react"
import FormField from "../form/FormField"

interface DateFilterProps {
    year: string 
    month: string 
    day: string 
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const DateFilter = ({ day, month, year, onChange }: DateFilterProps) => {
    return (
        <div className="date-filter-container">
            <div className="date-filter">
                <div className="year-field">
                    <FormField 
                        id="year" 
                        label="Year" 
                        type="text" 
                        value={year}
                        onChange={onChange} />
                </div>
                <div className="month-field">
                    <FormField 
                        id="month" 
                        label="Month" 
                        type="text" 
                        value={month}
                        onChange={onChange} />
                </div>
                <div className="day-field">
                    <FormField
                        id="day" 
                        label="Day" 
                        type="text" 
                        value={day}
                        onChange={onChange} />
                </div>
            </div>
        </div>
    )
}

export default DateFilter