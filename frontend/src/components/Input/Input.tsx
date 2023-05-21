import InputElement from "./style"
import { BorderStyle, InputProps } from "../../utils/Input"

function borderStyle(style: BorderStyle) {
    const stylization = (style === BorderStyle.SolidBorder) ? "1px solid #000" : ""
    return stylization
}

export default function Input(props: InputProps) {
    const { placeholder, type, style, value, onChange } = props


    return <InputElement type={type} value={value} onChange={onChange} placeholder={placeholder} style={{border: borderStyle(style)}}/>
}