import Input from "../../../components/Input/Input"
import { BorderStyle } from "../../../utils/Input"
import { InputAreaContainer } from "./style"
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputAreaProps {
    title: string,
    placeholder: string,
    type: string,
    border: BorderStyle,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string,
    name: string,
    register: UseFormRegister<FieldValues>
}

function InputArea(props: InputAreaProps) {
    const { title, placeholder, type, border, value, onChange, name, register } = props

    return (
        <InputAreaContainer>
            <h2>{title}</h2>
            <Input placeholder={placeholder} register={register} onChange={onChange} name={name} value={value} type={type} style={border}/>
        </InputAreaContainer>)
}

export default InputArea