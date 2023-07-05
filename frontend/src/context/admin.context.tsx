import React, { useCallback, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iUserSimple } from "../interfaces/users";
import { iAdmin, iAdminLogin, iAdminRegister, iSectors, iCity, iAdminEdit, iListUsers } from "../interfaces/admin";
import api from "../utils/axios";

export const AdminContext = createContext<
    {
        token: string,
        setToken: React.Dispatch<React.SetStateAction<string>>,
        admin: iAdmin,
        setAdmin: React.Dispatch<React.SetStateAction<iAdmin>>,
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
        adminSelf: () => Promise<void>,
        adminLogout: () => void,
        adminList: () => Promise<void>,
        adminRegister: (data: iAdminRegister) => Promise<void>,
        adminUpdate: (id: string, data: iAdminEdit) => Promise<void>,
        adminDelete: (id: string) => Promise<void>,
        adminListUsers: (query: iListUsers) => Promise<void>,
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
            admin: { id: '', name: '', email: '', avatar: '', city: '', phone: '', isSuper: false },
            setAdmin: ()=>{},
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
            adminSelf: ()=> Promise.resolve(),
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
        const retrievedToken: string = localStorage.getItem('@adminToken')
        if(retrievedToken){
            setToken(retrievedToken)
            adminSelf()
            api.defaults.headers.common['Authorization'] = `Bearer ${retrievedToken}`
        }
        //No caso de logout, o token é removido do localStorage
        return () => {
            localStorage.removeItem('@adminToken')
        }
    },[])


    const [token, setToken] = React.useState<string>('')
    const [admins, setAdmins] = React.useState<iAdmin[]>([])
    const [admin, setAdmin] = React.useState<iAdmin>({ id: '', name: '', email: '', phone: '', avatar: '', city: '', isSuper: false})
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)
    const [usersList, setUsersList] = React.useState<iUserSimple[]>([])
    const [sectors, setSectors] = React.useState<iSectors[]>([])
    const [cities, setCities] = React.useState<iCity[]>([])

    const adminLogin = useCallback(async (data: iAdminLogin) => {
        try {
            const response = await api.post('/admin/login', data) as { data: { token: string } }
            setToken(response.data.token)
            localStorage.setItem('@adminToken', response.data.token)
            setIsAuthenticated(true)
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

    const adminSelf = useCallback(async () => {
        try{
            const admin = await api.get('/admin/self', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as { data: iAdmin }
            setAdmin(admin.data)
            setIsAuthenticated(true)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[token])

    const adminList = useCallback(async () => {
        try{
            const response = await api.get('/admin', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as { data: iAdmin[] }
            
            setAdmins(response.data)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    }, [token])

    const adminRegister = useCallback(async (data: iAdminRegister) => {
        try {
            const response = await api.post('/admin', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as { data: iAdmin }
            setAdmins([...admins, response.data])
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[admins])

    const adminUpdate = useCallback(async (id: string, data: iAdminEdit) => {
        try{
            console.log(data)
            const response = await api.patch(`/admin/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as { data: iAdmin }
            const updatedAdmins = admins.map(admin => { 
                return (admin.id === id) ? response.data : admin
            })
        
            setAdmins([...updatedAdmins])
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[admins, token])

    const adminDelete = useCallback(async (id: string) => {
        try{
            await api.delete(`/admin/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const updatedAdmins = admins.filter(admin => admin.id !== id)
            setAdmins(updatedAdmins)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[token, admins])

    // page: number, amount: number, city: string, name: string, id?: string
    const adminListUsers = useCallback(async ({ page = 1, amount = 10, city = "", name = "", id = "", isBanned = false, isActive = true } : iListUsers) => {
        try {

          const query = `?page=${page}&amount=${amount}&city=${city}&name=${name}&id=${id}&isBanned=${isBanned}&isActive=${isActive}`
          
          const response = await api.get(`/admin/users${query}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
          setUsersList(response.data.content)

        } catch (err: AxiosError | unknown) {
          if (err instanceof AxiosError) {
            toast.error(err.response?.data.message as string);
          } else {
            toast.error('Erro do lado do cliente, tente novamente!');
          }
        }
      }, [token]);

      const adminBanUsers = useCallback(async (id: string) => {
        try{
            
            const response = await api.put(`/admin/ban/${id}`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            toast.success(response.data.message as string);
            
            const updatedUsers: iUserSimple[] = usersList.filter((user) => {
                console.log(user)
                return (user.id !== id)
            })

            setUsersList(updatedUsers)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
      },[token, usersList])

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
            await api.delete(`/admin/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const updatedUsers = usersList.filter(user => user.id !== id)
            setUsersList(updatedUsers)
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
        },[token, usersList])

        const listSectors = useCallback(async () => {
            try{
                const response = await api.get('/admin/sector')
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
                const response = await api.post('/admin/sector', data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                setSectors([...sectors, response.data])
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[token, sectors])

        const deleteSectors = useCallback(async (id: string) => {
            try{
                await api.delete(`/sector/${id}`)
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
                const response = await api.post('/admin/city', data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                setCities([...cities, response.data])
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[token, cities])

        const deleteCities = useCallback(async (id: string) => {
            try{
                await api.delete(`/admin/city/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })


                const updatedCities: iCity[] = cities.filter((city) => { 
                    return city.id !== id
                } )

                
                setCities(updatedCities)
            }catch(err: AxiosError | unknown){
                if(err instanceof AxiosError){
                    toast.error(err.response?.data.message as string)
                }else{
                    toast.error('Erro do lado do cliente, tente novamente!')
                }
            }
        },[token, cities])

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
                admin, setAdmin,
                isAuthenticated, setIsAuthenticated,
                usersList, setUsersList,
                sectors, setSectors,
                cities, setCities,
                adminLogin, adminSelf,
                adminLogout,adminList, adminRegister,
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
