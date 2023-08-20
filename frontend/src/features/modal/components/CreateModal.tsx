import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { CreateModalContainer } from '../style';

interface CreateModalProps{
    pageName: string;
    addFunction: (data: { name: string}) => Promise<void>;
}

export default function CreateModal({pageName, addFunction}:CreateModalProps ) {

    const { register, handleSubmit} = useForm();

    const [elementCreated, setElementCreated] = useState(false);
    
    const createElement = (data: { name: string }) => {
        if (data.name) {
             addFunction(data);
             setElementCreated(true);
        }
    };

    if (elementCreated) {
        return (
            <CreateModalContainer>
                <h1>{pageName} criado(a) com sucesso!</h1>
            </CreateModalContainer>
        )
    }

    return (
      <CreateModalContainer onSubmit={handleSubmit(createElement)}>
        <h1>Criar {pageName}</h1>
        <input
          placeholder={`Nome do(a) ${pageName}`}
          {...register("name")}
        />
        <button className="confirm-btn" type="submit">
          Confirmar
        </button>
      </CreateModalContainer>
    );
}

