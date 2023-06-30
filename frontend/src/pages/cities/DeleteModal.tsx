import { DeleteModalContainer } from "./style"
import React, { useState } from 'react'
import { useAdmin } from "../../hooks/contexts";

interface DeleteModalProps {
    cityName: string;
    cityId: string;
}

export default function DeleteModal({ cityName, cityId }: DeleteModalProps) {

    const { deleteCities } = useAdmin()
    const [cityDeleted, setCityDeleted] = useState(false)

    const deleteCity = ()=> {
        deleteCities(cityId)
        setCityDeleted(true)
    }

    if (cityDeleted) {
        return (
            <DeleteModalContainer>
                <h1>Cidade excluída com sucesso!</h1>
            </DeleteModalContainer>
        )
    }

    return (
        <DeleteModalContainer>
            <h1>Apagar cidade</h1>
            <p>Você tem certeza que deseja apagar <b>{cityName}</b> dos registros?</p>
            <button className="confirm-btn">Confirmar</button>
        </DeleteModalContainer>
    )
}