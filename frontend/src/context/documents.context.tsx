import React, { useCallback, createContext } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iDocuments } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const DocumentsContext = createContext({
    registerDocument: (data: iDocuments) => {},
    updateDocument: (id: string, data: iDocuments) => {},
    deleteDocument: (id: string) => {}
});

export const DocumentsProvider = ({ children } : {children: JSX.Element}) => {

    const { token, documents, setDocuments } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerDocument = useCallback( async (data: iDocuments) => {
        try{
            const {data: document} = await api.post('/document', data) as {data: iDocuments}
            setDocuments([...documents, document])
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
            const {data:document} = await api.patch(`/document/${id}`, data) as {data: iDocuments}
            const index = documents.findIndex(document => document.id === id)
            documents[index] = document
            setDocuments([...documents])
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
            await api.delete(`/document/${id}`)
            const index = documents.findIndex(document => document.id === id)
            documents.splice(index, 1)
            setDocuments([...documents])
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
