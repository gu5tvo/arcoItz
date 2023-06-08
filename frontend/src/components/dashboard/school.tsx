import React from 'react'
import { useUser } from '../../hooks/contexts'
import { useForm } from 'react-hook-form'

export default function SchoolScreen(): JSX.Element {

    const { updateProfile } = useUser();
    const { register, handleSubmit } = useForm();

    return (
        <>
            <h1>Oi</h1>
        </>
    )
}