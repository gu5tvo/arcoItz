import React, { useCallback, createContext } from "react";
import api from "../utils/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { TalkToUsInputs } from "../pages/landing/components/TalkToUs";

export const LandingContext = createContext({
    sendSuportMessage: (data: TalkToUsInputs) => {},
});

export const LandingProvider = ({ children } : {children: JSX.Element}) => {

    const sendSuportMessage = useCallback( async (data: TalkToUsInputs) => {
        try{
            await api.post('/landing', data) as {data: TalkToUsInputs}
        
            toast.success("Email de suporte enviado com sucesso")
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    return (
        <LandingContext.Provider value={{sendSuportMessage}}>
            {children}
        </LandingContext.Provider>
    )
}