import { GenerateCheckbox } from "./style";

interface CheckBoxProps {
    label: string;
    id: string
}

export default function Checkbox(props: CheckBoxProps) {
    const { id, label } = props

    const CheckboxElement = GenerateCheckbox(id)

    return (
        <div style={{ position: "relative" }}>
            <CheckboxElement />
            <label htmlFor={id}>{label}</label>
        </div>
    )
    
}