import React, { useState } from 'react'
import { createContext } from 'react'
import PictureModal from '../components/pictureModal'

export const ModalContext = createContext<
    {
        recover: boolean,
        setRecover: React.Dispatch<React.SetStateAction<boolean>>,
        picture: boolean,
        setPicture: React.Dispatch<React.SetStateAction<boolean>>,
    }
>({
    recover: false,
    setRecover: () => {},
    picture: false,
    setPicture: () => {},
})

export const ModalProvider = ({children} : {children: JSX.Element}) => {

    const [recover, setRecover] = useState<boolean>(true)
    const [picture, setPicture] = useState<boolean>(false)

    return(
        <ModalContext.Provider value={{
            recover,
            setRecover,
            picture,
            setPicture
        }}>
            {picture && <PictureModal/>}
            {children}
        </ModalContext.Provider>
    )
}