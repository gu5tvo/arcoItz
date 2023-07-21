import { ModalContainer } from './style'
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

type ModalOptions =  'edit' | 'delete' | 'ban' | null

interface BanUserModalProps {
    name: string;
    id: string;
    resetChoice: React.Dispatch<React.SetStateAction<ModalOptions>>
    showModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BanUserModal({ name, id, resetChoice, showModal }: BanUserModalProps) {

    const { adminBanUsers } = useAdmin()
    const [userBanned, setUserBanned] = useState(false)

    const banUser = ()=> {
        adminBanUsers(id)
        setUserBanned(true)
    }

    if (userBanned) {
        resetChoice(null)
        showModal(false)
    }

    return (
        <ModalContainer>
            <h1>Banir Usuário</h1>
            <p>Você tem certeza que deseja banir <b>{name}</b>?</p>

            <button className="confirm-btn" onClick={banUser}>Confirmar</button>
        </ModalContainer>
    )
}