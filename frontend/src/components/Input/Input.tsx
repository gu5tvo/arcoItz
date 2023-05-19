import { InputContainer } from "./style"

interface InputProps {
    placeholder: string,
    type: string
}

function Input(props: InputProps) {
    const { placeholder, type } = props

    return <InputContainer type={type} placeholder={placeholder} className=""/>
}

export default Input