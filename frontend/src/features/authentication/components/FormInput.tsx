import React from 'react'
import { InputElement } from '../style'
import { UseFormRegister } from 'react-hook-form'
import loginSchema from '../../../schemas/login'
import registerSchema from '../../../schemas/register'
import { InferType, TypeFromShape, SchemaObjectDescription } from 'yup'

type FormType = InferType<typeof loginSchema | typeof registerSchema>

interface Props {
    type: string | any
    placeholder: string
    register: UseFormRegister<FormType>
    id?: string
}

export default function FormInput({ type, placeholder, register, id }: Props) {
  
  return <InputElement id={id ?? type} type={type} {...register(type)} placeholder={placeholder} />
}
