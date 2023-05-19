import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iCourses } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const CoursesContext = createContext({
    registerCourse: (data: iCourses) => {},
    updateCourse: (id: string, data: iCourses) => {},
    deleteCourse: (id: string) => {}
});

export const CoursesProvider = ({ children } : {children: JSX.Element}) => {

    const { token, courses, setCourses } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerCourse = useCallback( async (data: iCourses) => {
        try{
            const {data: course} = await api.post('/course', data) as {data: iCourses}
            setCourses([...courses, course])
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
            const {data:course} = await api.put(`/course/${id}`, data) as {data: iCourses}
            const index = courses.findIndex(course => course.id === id)
            courses[index] = course
            setCourses([...courses])
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
            await api.delete(`/course/${id}`)
            const index = courses.findIndex(course => course.id === id)
            courses.splice(index, 1)
            setCourses([...courses])
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