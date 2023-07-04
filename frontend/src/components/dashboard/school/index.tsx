import React from 'react'
import { useUser } from '../../../hooks/contexts'
import { useForm } from 'react-hook-form'
import Graduation from './Graduation';
import { SchoolScreenStyle } from './style';



export default function SchoolScreen(): JSX.Element {

    const { updateProfile } = useUser();
    const { register, handleSubmit } = useForm();

    return (
        <>
            <SchoolScreenStyle>
                <label>Formações</label>
                <Graduation/>
            </SchoolScreenStyle>
        </>
    )
}