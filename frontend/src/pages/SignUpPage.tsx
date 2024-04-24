import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../schemas/register";
import { useUser } from "../hooks/contexts";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../features";

export default function SignUpPage(): JSX.Element{

    const { register, handleSubmit, trigger, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const { registerUser: signUp, isAuthenticated, profile } = useUser();
    document.title = "Cadastre-se | DiversiTrampo";
    const navigate = useNavigate()

    useEffect(()=> {
        profile({ showError: false })
        if (isAuthenticated) navigate('/dashboard')
    }, [isAuthenticated])

    const signUpData: any = { signUp, handleSubmit, register, trigger, errors }

    return <SignUp {...signUpData}/>
}