import React, { useCallback, createContext, useState } from "react";
import { useUser } from "../hooks/contexts";
import api from "../utils/axios";
import { iDocuments } from "../interfaces/users";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import retrieveToken from "../utils/user/retrieveToken";
import Modal from "../components/Modal";
import ModalContent from "../components/dashboard/certificates/ModalContent";
import CertificateModal from "../components/CertificateModal";

export const DocumentsContext = createContext<{
        registerDocument: (data: iDocuments) => Promise<void>,
        updateDocument: (id: string, data: iDocuments) => Promise<void>,
        deleteDocument: (id: string) => Promise<void>,
        modalDisplay: boolean,
        setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>
    }>({
    registerDocument: (data: iDocuments) => Promise.resolve(),
    updateDocument: (id: string, data: iDocuments) => Promise.resolve(),
    deleteDocument: (id: string) => Promise.resolve(),
    modalDisplay: false,
    setModalDisplay: ()=>{}
});

export const DocumentsProvider = ({ children } : {children: JSX.Element}) => {

    const [ modalDisplay, setModalDisplay] = useState(false);
    

    const toggleModal = () => {setModalDisplay(!modalDisplay)}


    const { token, documents, setDocuments } = useUser()
    api.defaults.headers.Authorization = `Bearer ${token}`

    const registerDocument = useCallback( async (data: iDocuments) => {
        const token = retrieveToken()
        
        try{
            const {data: document} = await api.post('/document', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) as {data: iDocuments}
            setDocuments([...documents, document])
        }catch(err: AxiosError | unknown){
            if(err instanceof AxiosError){
                console.log(token);
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
        <DocumentsContext.Provider value={{registerDocument, updateDocument, deleteDocument, modalDisplay, setModalDisplay}}>
            
            {
                modalDisplay && <CertificateModal/>
            }
            {children}
        </DocumentsContext.Provider>
    )
}
