import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iExperiences } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const ExperienceContext = createContext({
    registerExperience: (data: iExperiences) => {},
    updateExperience: (id: string, data: iExperiences) => {},
    deleteExperience: (id: string) => {}
});

export const ExperienceProvider = ({ children } : {children: JSX.Element}) => {

    const { token, experiences, setExperiences } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerExperience = useCallback( async (data: iExperiences) => {
        try{
            const {data: experience} = await api.post('/experience', data) as {data: iExperiences}
            setExperiences([...experiences, experience])
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
            const {data:experience} = await api.patch(`/experience/${id}`, data) as {data: iExperiences}
            const index = experiences.findIndex(experience => experience.id === id)
            experiences[index] = experience
            setExperiences([...experiences])
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
            await api.delete(`/experience/${id}`)
            const index = experiences.findIndex(experience => experience.id === id)
            experiences.splice(index, 1)
            setExperiences([...experiences])
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