import React, { useEffect } from "react";
import DinamicHeader from "../../components/header";
import { FormContainer, Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login";
import { useUser } from "../../hooks/contexts";
import { useNavigate } from "react-router-dom";

interface LoginData {
    email: string,
    password: string,
    remember: boolean
}

interface Props {
    children: JSX.Element | JSX.Element[] | string | (()=> JSX.Element)
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