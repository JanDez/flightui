import { ChangeEvent } from "react"
import FormField from "../form/FormField"

interface PriceFilterProps {
    minPriceStr: string
    maxPriceStr: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PriceFilter = ({ minPriceStr, maxPriceStr, onChange }: PriceFilterProps) => {
    return (
        <div className="price-filter-container">
            <div className="price-filter">
                <div className="min">
                    <FormField 
                        id="min"
                        label="Min price $: "
                        type="text"
                        value={minPriceStr}
                        onChange={onChange} />
                </div>
                <div className="max">
                    <FormField
                        id="max"
                        label="Max price $: " 
                        type="text" 
                        value={maxPriceStr} 
                        onChange={onChange} />
                </div>
            </div>
        </div>
    )
}

export default PriceFilter