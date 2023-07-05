import { ModalContainer } from './style'
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

interface UnbanUserModalProps {
    name: string;
    id: string;
}

export default function UnbanUserModal({ name, id }: UnbanUserModalProps) {

    const { adminBanUsers } = useAdmin()
    const [userUnbanned, setUserUnbanned] = useState(false)

    const unbanUser = ()=> {
        adminBanUsers(id)
        setUserUnbanned(true)
    }

    if (userUnbanned) {
        return (
            <ModalContainer>
                <h1>Usuário desbanido com sucesso!</h1>
            </ModalContainer>
        )
    }

    return (
        <ModalContainer>
            <h1>Banir Usuário</h1>
            <p>Você tem certeza que deseja desbanir <strong>{name}</strong>?</p>

            <button className="confirm-btn" onClick={unbanUser}>Confirmar</button>
        </ModalContainer>
    )
}