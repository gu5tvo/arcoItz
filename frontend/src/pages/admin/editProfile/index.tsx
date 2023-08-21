import { EditProfileContainer } from './style';
import React, { useEffect, useState } from 'react'
import { useAdmin, useModal } from "../../../hooks/contexts";
import { Image , Button } from "../../../components/dashboard/styles";
import defaultImage from '../../../assets/profile-picture.svg'
import DinamicHeader from '../../../layouts/Header';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface EditProfileInputs{
    name: string
    email: string
    password: string
    phone: string
}

export default function EditAdminProfile() {
    const { register, handleSubmit} = useForm();
    const { adminUpdate , admin, listCities, cities } = useAdmin();
    const { setPicture, setRequest } = useModal() ;
    const [avatar, setAvatar] = useState("");
    const [id, setId] = useState("");
    const [updated, setUpdated] = useState(false);
    const [pfp, setPfp] = useState("");
    const [city, setCity] = useState("");

    useEffect(()=> {
        listCities();
        setId(admin.id);
        setAvatar(admin.avatar);
    }, [])  

    const editAdmin = ({name, email, password,phone}:EditProfileInputs)=> {
        if (name || email || password || pfp) {
            const avatar = pfp;
            adminUpdate(id, { name, email, password, avatar, city, phone });
            setUpdated(true);
        }
    }

    const onChangePicture = () => {
        setRequest({ source: 'admin', id, setPfp });
        setPicture(true);
    }

    if (updated) {
        return ( <Navigate to='/admin/painel'/>);
    }

    return (<>
        <DinamicHeader adminLogoutBtn adminPanel/>
        <EditProfileContainer onSubmit={handleSubmit(editAdmin)}>
            <img src={pfp ? pfp : avatar ? avatar : defaultImage} alt={"Foto de " + admin.name} />
            <Button onClick={onChangePicture}>Alterar foto</Button>

            <input placeholder="Nome" type='text' {...register("name")} />
            <input placeholder="Email" type='email' {...register("email")} />
            <input placeholder="Senha" type='password' {...register("password")} />
            <input placeholder="Número de telefone" type='text' {...register("phone")} />

            <select onChange={(e) => setCity(e.target.value)}>
                <option value="">Todas as cidades</option>
                    {cities.map((city) => (
                <option key={city.id} value={city.name}>{city.name}</option>
            ))}
            </select>

            <button className="confirm-btn" type='submit'>Confirmar mudanças</button>
        </EditProfileContainer>
        </>)
}