import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iCourses } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import retrieveToken from "../utils/user/retrieveToken";

export const CoursesContext = createContext({
    registerCourse: (data: iCourses) => {},
    updateCourse: (id: string, data: iCourses) => {},
    deleteCourse: (id: string) => {}
});

export const CoursesProvider = ({ children } : {children: JSX.Element}) => {

    const { token, profile } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerCourse = useCallback( async (data: iCourses) => {
        try{
            const token = retrieveToken()

            await api.post('/course', data, {
                headers: { 
                    'Authorization': `Bearer ${token}` 
                }
            }) as {data: iCourses}
            profile({ coursesData: true })
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const updateCourse = useCallback( async (id: string, data: iCourses) => {
        try{
            const token = retrieveToken()
            await api.patch(`/course/${id}`, data, {
                headers: { 
                    'Authorization': `Bearer ${token}` 
                }
            }) as {data: iCourses}
            
            profile({ coursesData: true })
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const deleteCourse = useCallback( async (id: string) => {
        try{
            const token = retrieveToken()
            await api.delete(`/course/${id}`, {
                headers: { 
                    'Authorization': `Bearer ${token}` 
                }
            })
            
            profile({ coursesData: true })
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    return(
        <CoursesContext.Provider value={{registerCourse, updateCourse, deleteCourse}}>
            {children}
        </CoursesContext.Provider>
    )
}