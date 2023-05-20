import React, { useCallback, createContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { iUserSimple } from "../interfaces/users";
import { iAdmin, iAdminLogin, iAdminRegister, iSectors, iCity } from "../interfaces/admin";
import api from "../utils/axios";

export const AdminContext = createContext<
    {
        token: string,
        setToken: React.Dispatch<React.SetStateAction<string>>,
        admins: iAdmin[],
        setAdmins: React.Dispatch<React.SetStateAction<iAdmin[]>>,
        isAuthenticated: boolean,
        setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
        usersList: iUserSimple[],
        setUsersList: React.Dispatch<React.SetStateAction<iUserSimple[]>>,
        sectors: iSectors[],
        setSectors: React.Dispatch<React.SetStateAction<iSectors[]>>,
        cities: iCity[],
        setCities: React.Dispatch<React.SetStateAction<iCity[]>>,
        adminLogin: (data: iAdminLogin) => Promise<void>,
        adminLogout: () => void,
        adminList: () => Promise<void>,
        adminRegister: (data: iAdminRegister) => Promise<void>,
        adminUpdate: (id: string, data: iAdminRegister) => Promise<void>,
        adminDelete: (id: string) => Promise<void>,
        adminListUsers: (page: number, amount: number, city: string) => Promise<void>,
        adminBanUsers: (id: string) => Promise<void>,
        adminUpdateUsers: (id: string, data: iUserSimple) => Promise<void>,
        adminDeleteUsers: (id: string) => Promise<void>,
        listSectors: () => Promise<void>,
        registerSectors: (data: { name: string}) => Promise<void>,
        deleteSectors: (id: string) => Promise<void>,
        listCities: () => Promise<void>,
        registerCities: (data: { name: string}) => Promise<void>,
        deleteCities: (id: string) => Promise<void>,
        adminDeleteCourse: (id: string) => Promise<void>,
        adminDeleteSkill: (id: string) => Promise<void>,
        adminDeleteDocument: (id: string) => Promise<void>,
        adminDeleteExperience: (id: string) => Promise<void>}>({
            token: '',
            setToken: () => {},
            admins: [],
            setAdmins: () => {},
            isAuthenticated: false,
            setIsAuthenticated: () => {},
            usersList: [],
            setUsersList: () => {},
            sectors: [],
            setSectors: () => {},
            cities: [],
            setCities: () => {},
            adminLogin: () => Promise.resolve(),
            adminLogout: () => {},
            adminList: () => Promise.resolve(),
            adminRegister: () => Promise.resolve(),
            adminUpdate: () => Promise.resolve(),
            adminDelete: () => Promise.resolve(),
            adminListUsers: () => Promise.resolve(),
            adminBanUsers: () => Promise.resolve(),
            adminUpdateUsers: () => Promise.resolve(),
            adminDeleteUsers: () => Promise.resolve(),
            listSectors: () => Promise.resolve(),
            registerSectors: () => Promise.resolve(),
            deleteSectors: () => Promise.resolve(),
            listCities: () => Promise.resolve(),
            registerCities: () => Promise.resolve(),
            deleteCities: () => Promise.resolve(),
            adminDeleteCourse: () => Promise.resolve(),
            adminDeleteSkill: () => Promise.resolve(),
            adminDeleteDocument: () => Promise.resolve(),
            adminDeleteExperience: () => Promise.resolve()
        });

export const AdminProvider = ({ children }: { children: JSX.Element }) => {

    useEffect(() => {
        const retrivedToken: string = localStorage.getItem('@adminToken')
        if(retrivedToken){
            setToken(retrivedToken)
            api.defaults.headers.Authorization = `Bearer ${retrivedToken}`
        }
        //No caso de logout, o token é removido do localStorage
        return () => {
            localStorage.removeItem('@adminToken')
        }
    },[])


    const [token, setToken] = React.useState<string>('')
    const [admins, setAdmins] = React.useState<iAdmin[]>([])
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)
    const [usersList, setUsersList] = React.useState<iUserSimple[]>([])
    const [sectors, setSectors] = React.useState<iSectors[]>([])
    const [cities, setCities] = React.useState<iCity[]>([])

    const adminLogin = useCallback(async (data: iAdminLogin) => {
        try {
            const response = await api.post('/admin/login', data) as { data: { token: string } }
            setToken(response.data.token)
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`
            localStorage.setItem('@adminToken', response.data.token)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const adminLogout = useCallback(() => {
        setToken('')
        api.defaults.headers.Authorization = ''
        localStorage.removeItem('@adminToken')
    },[])

    const adminList = useCallback(async () => {
        try{
            const response = await api.get('/admin') as { data: iAdmin[] }
            setAdmins(response.data)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const adminRegister = useCallback(async (data: iAdminRegister) => {
        try {
            const response = await api.post('/admin', data) as { data: iAdmin }
            setAdmins([...admins, response.data])
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[admins])

    const adminUpdate = useCallback(async (id: string, data: iAdminRegister) => {
        try{
            const response = await api.patch(`/admin/${id}`, data) as { data: iAdmin }
            const updatedAdmins = admins.map(admin => { if(admin.id === id){ return response.data } return admin})
            setAdmins(updatedAdmins)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[admins])

    const adminDelete = useCallback(async (id: string) => {
        try{
            await api.delete(`/admin/${id}`)
            const updatedAdmins = admins.filter(admin => admin.id !== id)
            setAdmins(updatedAdmins)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const adminListUsers = useCallback(async (page: number = 1, amount: number = 10, city: string) => {
        try {
          const query = city ? `?page=${page}&amount=${amount}&city=${city}` : `?page=${page}&amount=${amount}`;
          const response = await api.get(`/users${query}`);
          return response.data;
        } catch (err: AxiosError | unknown) {
          if (err instanceof AxiosError) {
            toast.error(err.response?.data.message as string);
          } else {
            toast.error('Erro do lado do cliente, tente novamente!');
          }
        }
      }, []);

      const adminBanUsers = useCallback(async (id: string) => {
        try{
            const response = await api.put(`/users/ban/${id}`);
            toast.success(response.data.message as string);
            const updatedUsers: iUserSimple[] = usersList.map(user => {
                if(user.id === id){
                    return {...user, isBanned: true}
                }
                return user
            })
            setUsersList(updatedUsers)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
      },[])

      const adminUpdateUsers = useCallback(async (id: string, data: iUserSimple) => {
        try{
            const response = await api.patch(`/users/${id}`, data) as { data: iUserSimple }
            const updatedUsers = usersList.map(user => { if(user.id === id){ return response.data } return user})
            setUsersList(updatedUsers)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
      },[])

        const adminDeleteUsers = useCallback(async (id: string) => {
        try{
            await api.delete(`/users/${id}`)
            const updatedUsers = usersList.filter(user => user.id !== id)
            setUsersList(updatedUsers)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
        },[])

        const listSectors = useCallback(async () => {
            try{
                const response = await api.get('/sectors')
                setSectors(response.data)
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const registerSectors = useCallback(async (data: { name: string}) => {
            try{
                const response = await api.post('/sectors', data)
                setSectors([...sectors, response.data])
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const deleteSectors = useCallback(async (id: string) => {
            try{
                await api.delete(`/sectors/${id}`)
                const updatedSectors: iSectors[] = sectors.filter(sector => sector.id !== id)
                setSectors(updatedSectors)
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const listCities = useCallback(async () => {
            try{
                const response = await api.get('/admin/city')
                setCities(response.data)
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const registerCities = useCallback(async (data: { name: string}) => {
            try{
                const response = await api.post('/admin/city', data)
                setCities([...cities, response.data])
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const deleteCities = useCallback(async (id: string) => {
            try{
                await api.delete(`/admin/city/${id}`)
                const updatedCities: iCity[] = cities.filter(city => city.id !== id)
                setCities(updatedCities)
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const adminDeleteCourse = useCallback(async (id: string) => {
            try{
                await api.delete(`/admin/courses/${id}`)
                toast.success('Curso deletado com sucesso!')
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const adminDeleteSkill = useCallback(async (id: string) => {
            try{
                await api.delete(`/admin/skills/${id}`)
                toast.success('Habilidade deletada com sucesso!')
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }},[])

        const adminDeleteDocument = useCallback(async (id: string) => {
            try{
                await api.delete(`/admin/documents/${id}`)
                toast.success('Documento deletado com sucesso!')
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        const adminDeleteExperience = useCallback(async (id: string) => {
            try{
                await api.delete(`/admin/experiences/${id}`)
                toast.success('Experiência deletada com sucesso!')
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[])

        return (
            <AdminContext.Provider value={{
                token, setToken,
                admins, setAdmins,
                isAuthenticated, setIsAuthenticated,
                usersList, setUsersList,
                sectors, setSectors,
                cities, setCities,
                adminLogin, adminLogout,
                adminList, adminRegister,
                adminUpdate, adminDelete,
                adminListUsers, adminBanUsers,
                adminUpdateUsers, adminDeleteUsers,
                listSectors, registerSectors,
                deleteSectors, listCities,
                registerCities, deleteCities,
                adminDeleteCourse, adminDeleteSkill,
                adminDeleteDocument, adminDeleteExperience
            }}>
                {children}
            </AdminContext.Provider>
        )



}
