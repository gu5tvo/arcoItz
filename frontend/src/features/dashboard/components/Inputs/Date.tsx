import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { Date, DateInputContainer } from '../../style/inputs'

interface Props {
    blockInput?: boolean
    name: string
    setFunc: (state: string)=> void
    value: string
    placeholder: string
    register: UseFormRegister<FieldValues>
}

export default function DateInput({ blockInput, name, setFunc, value, placeholder, register }: Props) {
    
    return (
        <DateInputContainer onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFunc(e.target.value)}>

            <Date $blockInput={blockInput} mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder={placeholder} value={value} {...register(name)} />

        </DateInputContainer>
    )
}