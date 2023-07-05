import { CreateModalContainer } from "./style"
import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";

export default function CreateModal() {
    const { registerSectors } = useAdmin()

    const [cityCreated, setCityCreated] = useState(false)
    const [cityName, setCityName] = useState("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setCityName(e.target.value)
    }

    const createCity = ()=> {
        if (cityName) {
            registerSectors({ name: cityName })
            setCityCreated(true)
        }
    }

    if (cityCreated) {
        return (
            <CreateModalContainer>
                <h1>Cidade criada com sucesso!</h1>
            </CreateModalContainer>
        )
    }

    return (
        <CreateModalContainer>
            <h1>Criar cidade</h1>
            <input placeholder="Nome da cidade" onChange={onChange} />
            <button className="confirm-btn" onClick={createCity}>Criar cidade</button>
        </CreateModalContainer>
    )
}