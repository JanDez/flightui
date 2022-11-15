import { ChangeEvent } from "react"

interface SelectFieldProps {
    id: string 
    label: string 
    value: string | number
    options: string[]
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectField = ({ id, label, options, value, onChange }: SelectFieldProps) => {
    return (
        <div className="form-field">
            <label 
                className="input-label" 
                htmlFor={id}>
                    {label}
            </label>
            <select name={id} id={id} value={value} onChange={onChange}>
                {options.map((option, index) => 
                    <option value={option} key={index}>
                        {option}
                    </option>
                )}
            </select>
        </div>
    )
}

export default SelectField