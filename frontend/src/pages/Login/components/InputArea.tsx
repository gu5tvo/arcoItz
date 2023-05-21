import Input from "../../../components/Input/Input"
import { BorderStyle } from "../../../utils/Input"
import { InputAreaContainer } from "./style"

interface InputAreaProps {
    title: string,
    placeholder: string,
    type: string,
    border: BorderStyle,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

function InputArea(props: InputAreaProps) {
    const { title, placeholder, type, border, value, onChange } = props

    return (
        <InputAreaContainer>
            <h2>{title}</h2>
            <Input placeholder={placeholder} onChange={onChange} value={value} type={type} style={border}/>
        </InputAreaContainer>)
}

export default InputArea