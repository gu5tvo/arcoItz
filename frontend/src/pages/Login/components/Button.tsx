import { ButtonElement } from "./style"

interface ButtonProps {
    content: string,
    type: "button" | "submit" | "reset"
}

function Button(props: ButtonProps) {

    
    return <ButtonElement type={props.type} >{props.content}</ButtonElement>
}

export default Button