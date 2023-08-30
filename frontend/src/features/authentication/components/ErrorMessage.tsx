import { ErrorText } from "../style"
import React from 'react'

interface Props {
    message?: string
}

export default function ErrorMessage({ message }: Props) {

    if (!message) return <></>

    return <ErrorText>{message}</ErrorText>
}