import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../features";
import { useUser } from "../hooks/contexts";
import loginSchema from "../schemas/login";

export default function SignInPage() {
    document.title = "Entrar | DiversiTrampo";

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    
    const { login: signIn, isAuthenticated, profile } = useUser()
    const navigate = useNavigate()

    useEffect(()=> {
        profile({ showError: false })
        if (isAuthenticated) navigate('/dashboard')
    }, [isAuthenticated])
    
    const SignInData: any = { handleSubmit, signIn, trigger, register, errors }
    
    return <SignIn {...SignInData} showFooter/>
}