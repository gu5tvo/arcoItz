import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iDocuments } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import retrieveToken from "../utils/user/retrieveToken";

export const DocumentsContext = createContext<{
        registerDocument: (file : File) => Promise<void>,
        updateDocument: (id: string, data: iDocuments) => Promise<void>,
        deleteDocument: (id: string) => Promise<void>,
    }>({
    registerDocument: () => Promise.resolve(),
    updateDocument: () => Promise.resolve(),
    deleteDocument: () => Promise.resolve()
});

export const DocumentsProvider = ({ children } : {children: JSX.Element}) => {
    
    const { profile, setDocuments } = useUser()
    const token = retrieveToken()
    // api.defaults.headers.Authorization = `Bearer ${token}`
    
    const registerDocument = useCallback( async ( file : File) => {
        
        try{
            const formData = new FormData();
            formData.append('file', file); 
        
            const response = await api.post('/document', formData, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data', 
              },
            }) as { data: iDocuments };
            
            setDocuments((oldDocs)=> {
                const newDocs = oldDocs.slice()
                newDocs.push(response.data)
                return newDocs
            })
            await profile({ documentsData: true })
            
            toast.success("Documento adicionado com sucesso")

        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const updateDocument = useCallback( async (id: string, data: iDocuments) => {
        try{
            await api.patch(`/document/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            
            await profile({ documentsData: true })
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    const deleteDocument = useCallback( async (id: string) => {
      
        try{
            await api.delete(`/document/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            
            await profile({ documentsData: true })

        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                toast.error(err.response?.data.message as string)
            }else{
                toast.error('Erro do lado do cliente, tente novamente!')
            }
        }
    },[])

    return (
        <DocumentsContext.Provider value={{registerDocument, updateDocument, deleteDocument}}>

            {children}
        </DocumentsContext.Provider>
    )
}
