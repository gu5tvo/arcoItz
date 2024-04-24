import React from 'react'
import { InputElement } from '../style'
import { UseFormRegister } from 'react-hook-form'
import loginSchema from '../../../schemas/login'
import registerSchema from '../../../schemas/register'
import { InferType } from 'yup'

type FormType = InferType<typeof loginSchema | typeof registerSchema>

interface Props {
    type: any
    placeholder: string
    register: UseFormRegister<FormType>
    id?: any
}

export default function FormInput({ type, placeholder, register, id }: Props) {
  
  return <InputElement id={id ?? type} type={type} placeholder={placeholder} {...register(id ? id : type)} />
}
