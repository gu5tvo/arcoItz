import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { Description } from '../../style/inputs'

interface Props {
    description?: string
    register: UseFormRegister<FieldValues>
}

export default function DescriptionInput({ description, register }: Props) {

    return (
        <Description spellCheck={false} placeholder="Descrição" defaultValue={description} {...register('description')}/>
    )
}