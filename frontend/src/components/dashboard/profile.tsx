import React, {useEffect} from 'react'
import { useUser } from '../../hooks/contexts'
import { useForm } from 'react-hook-form'
import { useModal } from '../../hooks/contexts';
import { Image, Input, Label, Select, Button, MaskedInput, TextArea } from './styles';
import { useNavigate } from 'react-router-dom';

export default function ProfileScreen(): JSX.Element {

    const { updateProfile, user } = useUser();
    const { register, handleSubmit } = useForm();
    const { setPicture } = useModal() 
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[user])

    return (
        <>
            <Image src={user.avatar} alt={"foto de " + user.name} />
            <Button onClick={()=>setPicture(true)}>Alterar foto</Button>
            <form onSubmit={handleSubmit(updateProfile)}>
                <Label htmlFor="pronnouns">Pronomes</Label>
                <Input type="text" placeholder="Escreva seu pronome - elu/delu" defaultValue={user.pronnouns ? user.pronnouns : ''} {...register('pronnouns')} />
                <Label htmlFor="number" >Número de telefone</Label>
                <MaskedInput mask="(99) 9 9999-9999" type="text" placeholder="Digite seu número de telefone" defaultValue={user.number ? user.number : ''} {...register('number')} />
                <Label htmlFor="isActive">Exibição:</Label>
                <Select {...register('isActive')}>
                    <option value="true">Exibir meu currículo em buscas</option>
                    <option value="false">Não exibir meu currículo em buscas</option>
                </Select>
                <Label htmlFor='title'>Título</Label>
                <Input type="text" placeholder="Ex: Vendedor externo" defaultValue={user.title ? user.title : ''} {...register('title')} />
                <Label htmlFor='bio'>Biografia</Label>
                <TextArea placeholder="Escreva um pouco sobre você" defaultValue={user.bio ? user.bio : ''} {...register('bio')} />
                <Label htmlFor='gender'>Gênero</Label>
                <Input type='text' placeholder="Ex: Mulher Trans" defaultValue={user.gender ? user.gender : ''} {...register('gender')} />
                <Button type="submit">Salvar alterações</Button>
            </form>
        </>
    )
}