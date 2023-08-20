import { EditModalContainer } from "./style"
import React, { useEffect, useState } from 'react'
import { useAdmin, useModal } from "../../../hooks/contexts";
import {  Button } from "../../../components/dashboard/styles";
import defaultImage from '../../../assets/profile-picture.svg'
import { PictureModal } from "../../../features";
import { useForm } from "react-hook-form";

interface EditModalProps {
    id: string;
    avatar: string;
    name: string;
}

interface EditModalInputs{
    admName: string
    email: string
    password: string
    phone: string
}

export default function EditModal({ id, avatar, name }: EditModalProps) {
    const { register , handleSubmit} = useForm();
    const { adminUpdate , admin, listCities, cities } = useAdmin();
    const { setPicture } = useModal() ;

    const [updated, setUpdated] = useState(false);
    const [city, setCity] = useState("");

    useEffect(()=> {
        listCities();
    }, [])


    const editAdmin = ({admName, email, password, phone}:EditModalInputs) => {
        if (name || email || password) {
            adminUpdate(id, { name: admName, email, password, city, phone });
            setUpdated(true);
        }
    }

    const onChangePicture = ()=> {
        // setRequest({ source: 'admin' });
        setPicture(true);
    }

    if (updated) {
        return (
            <EditModalContainer small>
                <h1>Mudanças realizadas com sucesso!</h1>
            </EditModalContainer>
        )
    }

    return (
        <EditModalContainer onSubmit={handleSubmit(editAdmin)}>
            <h1>Editar o perfil de {name}</h1>
            <img src={avatar ?? defaultImage} alt={"Foto de " + admin.name} />

            <PictureModal avatar={avatar} name={name} source="admin" id={id}/>
            <input placeholder="Nome" type='text' {...register("admName")} />
            <input placeholder="Email" type='email' {...register("email")} />
            <input placeholder="Senha" type='password' {...register("password")} />
            <input placeholder="Número de telefone" type='text' {...register("phone")} />
           
            <select onChange={(e) => setCity(e.target.value)}>
                <option value="">Todas as cidades</option>
                    {cities.map((city) => (
                <option key={city.id} value={city.name}>{city.name}</option>
            ))}
            </select>

            <button className="confirm-btn" type="submit">Confirmar mudanças</button>
        </EditModalContainer>
    )
}