import React, { useEffect, useState } from "react";
import DinamicHeader from "../../components/header";
import {LoginContainer, LoginForm, ErrorText} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetSchema } from "../../schemas/login";
import { useUser } from "../../hooks/contexts";
import { useLocation, useNavigate } from "react-router-dom";
import { iUserComplete } from "../../interfaces/users";

interface ResetData {
    password: string,
    confirmPassword: string
}

export default function ResetPage(): JSX.Element{
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { resetPassword, validateToken, user } = useUser()

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetSchema)
    });
    const [token, setToken] = useState("")
    const [fetched, setFetched] = useState(false)

    useEffect(()=> {
        setToken(pathname.split('/')[2])
        
        const getProfile = async() => {
            await validateToken(pathname.split('/')[2])
            setFetched(true)
        }
        
        getProfile()
    }, [])
    
    useEffect(()=> {
        if (fetched && !user) navigate('/')
    }, [user, fetched])

    const onLogin = handleSubmit(async (formData: ResetData) => {
        await trigger();
        resetPassword(token, formData.password);
      })

    document.title = "Resetar senha | DiversiTrampos";
    return (
        <>
            <DinamicHeader startBtn={true} searchBtn={true} registerBtn={true}/>
            <LoginContainer>
                <LoginForm onSubmit={onLogin}>
                    <h2>Resetar senha</h2>
                    <div className='form-section'>
                        <label>Senha</label>
                        <input type="password" {...register("password")} placeholder="Insira sua nova senha"/>
                        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                    </div> 
                    <div className='form-section'>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("confirmPassword")} placeholder="Insira sua nova senha novamente"/>
                        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                    </div> 
                    <div className='form-section'>                       
                        <button type="submit">Confirmar mudança de senha</button>
                    </div>
                </LoginForm>
            </LoginContainer>
        </>
    )
}