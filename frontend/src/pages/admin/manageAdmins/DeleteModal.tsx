import { DeleteModalContainer } from "./style"
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

interface DeleteAdmModalProps {
    name: string;
    id: string;
}

export default function DeleteAdminModal({ name, id }: DeleteAdmModalProps) {

    const { adminDelete } = useAdmin()
    const [adminDeleted, setAdminDeleted] = useState(false)

    const deleteAdmin = ()=> {
        adminDelete(id)
        setAdminDeleted(true)
    }

    if (adminDeleted) {
        return (
            <DeleteModalContainer>
                <h1>Registros excluídos com sucesso!</h1>
            </DeleteModalContainer>
        )
    }

    return (
        <DeleteModalContainer>
            <h1>Apagar Administrador</h1>
            <p>Você tem certeza que deseja excluir <b>{name}</b> dos registros?</p>

            <button className="confirm-btn" onClick={deleteAdmin}>Confirmar</button>
        </DeleteModalContainer>
    )
}