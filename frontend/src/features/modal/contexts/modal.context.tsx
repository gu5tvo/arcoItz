import React, { useState } from 'react'
import { createContext } from 'react'

export const ModalContext = createContext<{ 
    isModalVisible: boolean,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>> 
}>({ 
    isModalVisible: false,
    setIsModalVisible: () => {}
})

export const ModalProvider = ({children} : {children: JSX.Element}) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    return(
        <ModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
            { children }
        </ModalContext.Provider>
    )
}