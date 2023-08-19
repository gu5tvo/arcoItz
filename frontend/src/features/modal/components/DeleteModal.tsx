import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";
import { DeleteModalContainer } from '../style';

interface DeleteCityModalProps {
    elementName: string;
    elementId: string;
    elementType: string;
}

export default function DeleteElementModal({ elementName, elementId , elementType}: DeleteCityModalProps) {

    const { deleteCities , deleteSectors } = useAdmin();
    const [elementDeleted, setElementDeleted] = useState(false);

    const identifier = {
        "Setor": deleteCities,
        "Cidade": deleteSectors,
    }

    const deleteElement = () => {
        const remove = identifier[elementType];
        remove(elementId);
        setElementDeleted(true);
    }

    if (elementDeleted) {
        return (
            <DeleteModalContainer>
                <h1>Cidade excluída com sucesso!</h1>
            </DeleteModalContainer>
        )
    }

    return (
        <DeleteModalContainer>
            <h1>Apagar cidade</h1>
            <p>Você tem certeza que deseja apagar <b>{elementName}</b> dos registros?</p>
            <button className="confirm-btn" onClick={deleteElement}>Confirmar</button>
        </DeleteModalContainer>
    )
}