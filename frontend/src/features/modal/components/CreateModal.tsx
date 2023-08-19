import React, { useState } from 'react'
import { useAdmin } from "../../../hooks/contexts";
import { CreateModalContainer } from '../style';

interface CreateModalProps{
    elementType: string
}

export default function CreateModal({elementType}:CreateModalProps ) {
    const { registerSectors , registerCities } = useAdmin();

    const [elementCreated, setElementCreated] = useState(false);
    const [name, setName] = useState("");

    const identifier = {
        "Setor": registerSectors,
        "Cidade": registerCities,
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setName(e.target.value);
    }

    const createElement = () => {
        if (name) {
            const register = identifier[elementType];
            register({ name: name });
            setElementCreated(true);
        }
    }

    if (elementCreated) {
        return (
            <CreateModalContainer>
                <h1>{elementType} criado(a) com sucesso!</h1>
            </CreateModalContainer>
        )
    }

    return (
        <CreateModalContainer>
            <h1>Criar {elementType}</h1>
            <input placeholder={`Nome do(a) ${elementType}`} onChange={onChange} />
            <button className="confirm-btn" onClick={createElement}>Confirmar</button>
        </CreateModalContainer>
    )
}