import { ButtonElement } from "./style"

interface ButtonProps {
    content: string,
    onClick: ()=>{}
}

function Button(props: ButtonProps) {

    
    return <ButtonElement onClick={props.onClick}>{props.content}</ButtonElement>
}

export default Button