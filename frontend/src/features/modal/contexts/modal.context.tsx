import React, { useState } from 'react'
import { createContext } from 'react'

export const ModalContext = createContext<{ 
    isModalVisible: boolean
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    modalId: string
    setModalId: React.Dispatch<React.SetStateAction<string>> 
}>({ 
    isModalVisible: false,
    setIsModalVisible: () => {},
    modalId: "",
    setModalId: () => {}
})

export const ModalProvider = ({children} : {children: JSX.Element}) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [modalId, setModalId] = useState("")

    return(
        <ModalContext.Provider value={{ isModalVisible, setIsModalVisible, modalId, setModalId }}>
            { children }
        </ModalContext.Provider>
    )
}