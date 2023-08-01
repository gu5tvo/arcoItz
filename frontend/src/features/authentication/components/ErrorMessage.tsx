import { ErrorText } from "../style"
import React from 'react'

interface Props {
    field: {
        message?: string
    }
}

export default function ErrorMessage({ field }: Props) {

    if (!field) return <></>

    return <ErrorText>{field.message}</ErrorText>
}