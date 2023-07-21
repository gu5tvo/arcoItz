import React, { useState } from 'react'
import { createContext } from 'react'
import PictureModal from '../components/pictureModal'

export const ModalContext = createContext<
    {
        recover: boolean,
        setRecover: React.Dispatch<React.SetStateAction<boolean>>,
        picture: boolean,
        setPicture: React.Dispatch<React.SetStateAction<boolean>>,
        request: { source: "admin" | "user", id?: string, setPfp: React.Dispatch<React.SetStateAction<string>> },
        setRequest: React.Dispatch<React.SetStateAction<{
            source: 'admin' | 'user';
            id?: string;
            setPfp: React.Dispatch<React.SetStateAction<string>>;
        }>>
    }
>({
    recover: false,
    setRecover: () => {},
    picture: false,
    setPicture: () => {},
    request: null,
    setRequest: ()=> {}
})

export const ModalProvider = ({children} : {children: JSX.Element}) => {

    const [recover, setRecover] = useState<boolean>(true)
    const [picture, setPicture] = useState<boolean>(false)
    const [request, setRequest] = useState<{ source: 'admin' | 'user', id?: string, setPfp: React.Dispatch<React.SetStateAction<string>>}>(null)

    return(
        <ModalContext.Provider value={{
            recover,
            setRecover,
            picture,
            setPicture,
            request,
            setRequest
        }}>
            {picture && <PictureModal/>}
            {children}
        </ModalContext.Provider>
    )
}