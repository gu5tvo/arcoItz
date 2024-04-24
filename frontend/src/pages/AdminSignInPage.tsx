import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../hooks/contexts";
import loginSchema from "../schemas/login";
import { SignIn } from "../features";

import React from 'react'

export default function AdminSignInPage() {
    document.title = "Entrar | DiversiTrampo";

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    
    const { adminLogin: signIn, isAuthenticated, adminSelf } = useAdmin()
    
    const navigate = useNavigate()

    const LoginData: any = { handleSubmit, signIn, trigger, register, errors }


    useEffect(()=> {
        adminSelf(false)
        if (isAuthenticated) navigate('/admin/painel')
    }, [isAuthenticated])

    return (
        <SignIn {...LoginData}/>
    )
}