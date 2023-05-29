import { CheckboxElement } from "./style";

interface CheckBoxProps {
    label: string;
    id: string
}

export default function Checkbox(props: CheckBoxProps) {
    const { id, label } = props

    return (
        <div style={{ position: "relative" }}>
            <CheckboxElement id={id}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
    
}