import React from 'react'
import { SelectInfos } from '../../style/inputs'
import { FieldValues, UseFormRegister } from 'react-hook-form'
interface Props {
    defaultValue?: string
    register: UseFormRegister<FieldValues>
    selectName: string
    optionsNames: string[]
    onChange?: (value: React.ChangeEventHandler<HTMLSelectElement>)=> void
}

export default function SelectInput({ defaultValue, register, selectName, optionsNames, onChange }: Props) {
    
    const handleChange = (e)=> {
        if (onChange) onChange(e)
    }

    return (
        <SelectInfos {...register(selectName)} defaultValue={defaultValue} onChange={handleChange}>
            {optionsNames.map((name)=> (
                <option key={name} value={name}>{name}</option>
            ))}
        </SelectInfos>
    )
}