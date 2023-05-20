import React, { useState } from 'react'
import { createContext } from 'react'

export const ModalContext = createContext({

})

export const ModalProvider = ({children} : {children: JSX.Element}) => {

    return(
        <ModalContext.Provider value={{
        }}>
            {children}
        </ModalContext.Provider>
    )
}