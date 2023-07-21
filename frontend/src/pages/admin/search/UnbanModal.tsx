import { ModalContainer } from './style'
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

type ModalOptions =  'edit' | 'delete' | 'ban' | null

interface UnbanUserModalProps {
    name: string;
    id: string;
    resetChoice: React.Dispatch<React.SetStateAction<ModalOptions>>
    showModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UnbanUserModal({ name, id, resetChoice, showModal }: UnbanUserModalProps) {

    const { adminBanUsers } = useAdmin()
    const [userUnbanned, setUserUnbanned] = useState(false)

    const unbanUser = ()=> {
        adminBanUsers(id)
        setUserUnbanned(true)
    }

    if (userUnbanned) {
        resetChoice(null)
        showModal(false)
    }

    return (
        <ModalContainer>
            <h1>Desbnir Usuário</h1>
            <p>Você tem certeza que deseja desbanir <strong>{name}</strong>?</p>

            <button className="confirm-btn" onClick={unbanUser}>Confirmar</button>
        </ModalContainer>
    )
}