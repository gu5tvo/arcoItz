import React, { useEffect, useState } from "react";
import DinamicHeader from "../../../components/header/";
import { LoginContainer, LoginForm, ErrorText } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../schemas/login";
import { useAdmin } from "../../../hooks/contexts";
import LoginFooter from "./Footer";
import { Navigate } from "react-router-dom";

interface LoginData {
    email: string,
    password: string,
    remember: boolean
}

export default function AdminLogin() {

    const { adminLogin, adminSelf, token } = useAdmin()
    const [logged, setLogged] = useState(false)
    const [fetched, setFetched] = useState(false)

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onLogin = handleSubmit(async (formData: LoginData) => {
        await trigger();
        adminLogin(formData);

        setLogged(true)
      })

    useEffect(()=> {
        if (logged) {
            (async ()=>{
                await adminSelf()
                setFetched(true)
            })()
        }
    }, [token])

    if (fetched) return <Navigate to='/admin/painel'/>

    document.title = "Entrar | DiversiTrampos";
    return (
        <>
            <DinamicHeader startBtn={true} searchBtn={true} registerBtn={true}/>
            <LoginContainer>
                <LoginForm onSubmit={onLogin}>
                    <h2>Entrar</h2>
                    <label>Email</label>
                    <input type="email" {...register("email")} placeholder="Insira seu e-mail"/>
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    <label>Senha</label>
                    <input type="password" {...register("password")} placeholder="Insira sua senha"/>
                    {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                        
                        <div style={{margin: '0 auto', marginTop: '1em'}}>
                            <input type="checkbox" value="remember" {...register('remember')} />
                            <label>Lembrar-me</label>
                        </div>
                    <button type="submit">Entrar</button>
                    <LoginFooter/>
                </LoginForm>
            </LoginContainer>
        </>
    )
}