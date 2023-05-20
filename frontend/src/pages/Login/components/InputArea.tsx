import Input from "../../../components/Input/Input"
import { BorderStyle } from "../../../utils/Input"
import { InputAreaContainer } from "./style"

interface InputAreaProps {
    title: string,
    placeholder: string,
    type: string,
    border: BorderStyle
}

function InputArea(props: InputAreaProps) {
    const { title, placeholder, type, border } = props

    return (
        <InputAreaContainer>
            <h2>{title}</h2>
            <Input placeholder={placeholder} type={type} style={border}/>
        </InputAreaContainer>)
}

export default InputArea