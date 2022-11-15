import { ChangeEvent } from "react"

interface FormFieldProps {
    id: string 
    type: 'text' | 'number'
    label: string 
    value: string | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormField = ({ id, type, label, value, onChange }: FormFieldProps) => {
    return (
        <div className="form-field">
            <label 
                className="input-label" 
                htmlFor={id}>
                    {label}
            </label>
            <input 
                onChange={onChange}
                className="input-text" 
                id={id} 
                type={type}
                value={value} />
        </div>
    )
}

export default FormField