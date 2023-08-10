import { EditModalContainer } from "./style"
import React, { useEffect, useState } from 'react'
import { useAdmin, useModal } from "../../../hooks/contexts";
import {  Button } from "../../../components/dashboard/styles";
import defaultImage from '../../../assets/profile-picture.svg'
import { PictureModal } from "../../../features";
interface EditModalProps {
    id: string;
    avatar: string;
    name: string;
}
export default function EditModal({ id, avatar, name }: EditModalProps) {
    const { adminUpdate , admin, listCities, cities } = useAdmin()
    const { setPicture } = useModal() 


    const [updated, setUpdated] = useState(false)
    const [admName, setAdmName] = useState(name)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")

    useEffect(()=> {
        listCities();
    }, [])
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setAdmName(e.target.value)
    }
    
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setPassword(e.target.value)
    }

    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setPhone(e.target.value)
    }

    const editAdmin = ()=> {
        if (name || email || password) {
            adminUpdate(id, { name: admName, email, password, city, phone })
            setUpdated(true)
        }
    }

    const onChangePicture = ()=> {
        // setRequest({ source: 'admin' })
        setPicture(true)
    }

    if (updated) {
        return (
            <EditModalContainer small>
                <h1>Mudanças realizadas com sucesso!</h1>
            </EditModalContainer>
        )
    }

    return (
        <EditModalContainer>
            <h1>Editar o perfil de {name}</h1>
            <img src={avatar ?? defaultImage} alt={"Foto de " + admin.name} />

            <PictureModal avatar={avatar} name={name} source="admin" id={id}/>
            <input placeholder="Nome" type='text' onChange={onChangeName} />
            <input placeholder="Email" type='email' onChange={onChangeEmail} />
            <input placeholder="Senha" type='password' onChange={onChangePassword} />
        <input placeholder="Número de telefone" type='text' onChange={onChangePhone} />
            <select onChange={(e) => setCity(e.target.value)}>
                <option value="">Todas as cidades</option>
                    {cities.map((city) => (
                <option key={city.id} value={city.name}>{city.name}</option>
            ))}
            </select>

            <button className="confirm-btn" onClick={editAdmin}>Confirmar mudanças</button>
        </EditModalContainer>
    )
}