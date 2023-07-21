import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iExperiences } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import retrieveToken from "../utils/user/retrieveToken";

export const ExperienceContext = createContext({
    registerExperience: (data: iExperiences) => {},
    updateExperience: (id: string, data: iExperiences) => {},
    deleteExperience: (id: string) => {}
});

export const ExperienceProvider = ({ children } : {children: JSX.Element}) => {

    const { token, experiences, setExperiences, profile } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerExperience = useCallback( async (data: iExperiences) => {
        try{
            const token = retrieveToken()

            await api.post('/experience', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as {data: iExperiences}
            
            profile({ experiencesData: true })
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const updateExperience = useCallback( async (id: string, data: iExperiences) => {
        try{
            const token = retrieveToken()
            await api.patch(`/experience/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as {data: iExperiences}
            
            profile({ experiencesData: true })
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const deleteExperience = useCallback( async (id: string) => {
        try{
            const token = retrieveToken()
            await api.delete(`/experience/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            
            profile({ experiencesData: true })
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    return (
        <ExperienceContext.Provider value={{registerExperience, updateExperience, deleteExperience}}>
            {children}
        </ExperienceContext.Provider>
    )
}