import { CreateModalContainer } from "./style"
import React, { useState } from 'react'
import { useAdmin, useModal, useUser } from "../../../hooks/contexts";
import { Image , Button } from "../../../components/dashboard/styles";

interface EditModalProps {
    id: string;
}
export default function EditModal({ id }: EditModalProps) {
    const { adminUpdate , admin } = useAdmin()
    const { setPicture } = useModal() 


    const [updated, setUpdated] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setName(e.target.value)
    }
    
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.target.value)
    }
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setPassword(e.target.value)
    }

    const editAdmin = ()=> {
        if (name || email || password) {
            adminUpdate(id, { name, email, password })
            setUpdated(true)
        }
    }

    if (updated) {
        return (
            <CreateModalContainer>
                <h1>Mudanças realizadas com sucesso!</h1>
            </CreateModalContainer>
        )
    }

    return (
        <CreateModalContainer>
            <h1>Editar administrador</h1>
            <Image src={admin.avatar} alt={"foto de " + admin.name} />
            <Button onClick={()=>setPicture(true)}>Alterar foto</Button>
            <input placeholder="Nome" type='text' onChange={onChangeName} />
            <input placeholder="Email" type='email' onChange={onChangeEmail} />
            <input placeholder="Senha" type='password' onChange={onChangePassword} />

            <button className="confirm-btn" onClick={editAdmin}>Confirmar mudanças</button>
        </CreateModalContainer>
    )
}