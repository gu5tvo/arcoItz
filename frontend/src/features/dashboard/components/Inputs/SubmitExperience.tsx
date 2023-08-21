import React from 'react'
import { SubmitArea, SubmitButton } from "../../style/inputs";

interface Props {
    doesExist: boolean
    name: string
    onDelete: ()=>void
}

export default function SubmitExperience({ doesExist, name, onDelete }: Props) {

    return (
        <SubmitArea>
            <SubmitButton type='submit'>{doesExist ? "Editar" : "Salvar"} {name}</SubmitButton>
            
            { doesExist && <SubmitButton onClick={onDelete}>Excluir {name}</SubmitButton>}
        </SubmitArea>
    )
}