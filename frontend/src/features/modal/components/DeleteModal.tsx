import React, { useState } from 'react'
import { DeleteModalContainer } from '../style';

interface DeleteCityModalProps {
    elementName: string;
    elementId: string;
    pageName: string;
    remove: (id: string) => Promise<void>;
}

export default function DeleteElementModal({ elementName, elementId , pageName , remove}: DeleteCityModalProps) {

    const [elementDeleted, setElementDeleted] = useState(false);

    const deleteElement = () => {
        remove(elementId);
        setElementDeleted(true);
    }

    if (elementDeleted) {
        return (
            <DeleteModalContainer>
                <h1>{pageName} excluída(o) com sucesso!</h1>
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