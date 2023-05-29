import { ButtonElement } from "./style"

interface ButtonProps {
    content: string,
    type: "button" | "submit" | "reset",
    onClick?: any
}

function Button(props: ButtonProps) {
    const { content, type, onClick } = props
    
    return <ButtonElement onClick={onClick} type={type} >{content}</ButtonElement>
}

export default Button