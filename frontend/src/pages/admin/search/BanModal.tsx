import { ModalContainer } from './style'
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

interface BanUserModalProps {
    name: string;
    id: string;
}

export default function BanUserModal({ name, id }: BanUserModalProps) {

    const { adminBanUsers } = useAdmin()
    const [userBanned, setUserBanned] = useState(false)

    const banUser = ()=> {
        adminBanUsers(id)
        setUserBanned(true)
    }

    if (userBanned) {
        return (
            <ModalContainer>
                <h1>Usuário banido com sucesso!</h1>
            </ModalContainer>
        )
    }

    return (
        <ModalContainer>
            <h1>Banir Usuário</h1>
            <p>Você tem certeza que deseja banir <b>{name}</b>?</p>

            <button className="confirm-btn" onClick={banUser}>Confirmar</button>
        </ModalContainer>
    )
}