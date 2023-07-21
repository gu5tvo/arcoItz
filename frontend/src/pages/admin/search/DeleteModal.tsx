import { ModalContainer } from './style'
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

interface DeleteUserModalProps {
    name: string;
    id: string;
}

export default function DeleteUserModal({ name, id }: DeleteUserModalProps) {

    const { adminDeleteUsers } = useAdmin()
    const [userDeleted, setUserDeleted] = useState(false)

    const deleteUser = ()=> {
        adminDeleteUsers(id)
        setUserDeleted(true)
    }

    if (userDeleted) {
        return (
            <ModalContainer>
                <h1>Registros excluídos com sucesso!</h1>
            </ModalContainer>
        )
    }

    return (
        <ModalContainer>
            <h1>Apagar Usuário</h1>
            <p>Você tem certeza que deseja excluir <b>{name}</b> dos registros?</p>

            <button className="confirm-btn" onClick={deleteUser}>Confirmar</button>
        </ModalContainer>
    )
}