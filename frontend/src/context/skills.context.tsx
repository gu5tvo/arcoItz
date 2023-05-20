import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iSkills } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const SkillsContext = createContext({
    registerSkill: (data: iSkills) => {},
    deleteSkill: (id: string) => {}
});

export const SkillsProvider = ({ children } : {children: JSX.Element}) => {

    const { token, skills, setSkills } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerSkill = useCallback( async (data: iSkills) => {
        try{
            const {data: skill} = await api.post('/skill', data) as {data: iSkills}
            setSkills([...skills, skill])
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const deleteSkill = useCallback( async (id: string) => {
        try{
            await api.delete(`/skill/${id}`)
            const index = skills.findIndex(skill => skill.id === id)
            skills.splice(index, 1)
            setSkills([...skills])
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    return (
        <SkillsContext.Provider value={{registerSkill, deleteSkill}}>
            {children}
        </SkillsContext.Provider>
    )
}