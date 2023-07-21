import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iSkills } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import retrieveToken from "../utils/user/retrieveToken";

export const SkillsContext = createContext({
    registerSkill: (data: iSkills) => {},
    deleteSkill: (id: string) => {}
});

export const SkillsProvider = ({ children } : {children: JSX.Element}) => {

    const { token, skills, setSkills, profile } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerSkill = useCallback( async (data: iSkills) => {
        try{
            const token = retrieveToken()
            await api.post('/skill', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as {data: iSkills}
            
            profile({ skillsData: true })
            toast.success("Habilidade adicionada com sucesso")
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
            const token = retrieveToken()
            await api.delete(`/skill/${id}`, {
                headers: {
                    'Authorization': `Beraer ${token}`
                }
            })
            
            profile({ skillsData: true })
            toast.success("Habilidade deletada com sucesso")

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