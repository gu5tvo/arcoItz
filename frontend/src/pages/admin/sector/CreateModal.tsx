import { CreateModalContainer } from "./style"
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

export default function CreateModal() {
    const { registerSectors } = useAdmin()

    const [sectorCreated, setSectorCreated] = useState(false)
    const [name, setName] = useState("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setName(e.target.value)
    }

    const createSector = ()=> {
        if (name) {
            registerSectors({ name })
            setSectorCreated(true)
        }
    }

    if (sectorCreated) {
        return (
            <CreateModalContainer>
                <h1>Setor criado com sucesso!</h1>
            </CreateModalContainer>
        )
    }

    return (
        <CreateModalContainer>
            <h1>Criar setor</h1>
            <input placeholder="Nome do setor" onChange={onChange} />
            <button className="confirm-btn" onClick={createSector}>Confirmar</button>
        </CreateModalContainer>
    )
}