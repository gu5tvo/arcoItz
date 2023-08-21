import React from "react";
import DinamicHeader from "../../../layouts/Header";
import { FormContainer, Form } from "../style";

interface Props {
    children: React.ReactNode
    handleForm: ()=>void
}

export default function AuthenticationTemplate({ children, handleForm }: Props): JSX.Element{

    document.title = "Entrar | DiversiTrampos";
    return (
        <>
            <DinamicHeader startBtn searchBtn registerBtn/>
            <FormContainer>
                <Form onSubmit={handleForm}>
                    { children }
                </Form>                
            </FormContainer>
        </>
    )
}