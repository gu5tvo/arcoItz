import React, {useEffect} from 'react'
import { useUser } from '../../../hooks/contexts'
import { useForm } from 'react-hook-form'
import { useModal } from '../../../hooks/contexts';
import { Image, Input, Label, Select, Button, MaskedInput, TextArea, FormStyle } from '../styles';
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
            <FormStyle onSubmit={handleSubmit(updateProfile)}>
                <div>
                  <label htmlFor="pronouns" className='label-form'>Pronomes</label>
                  <Input type="text" placeholder="Escreva seu pronome - elu/delu" defaultValue={user.pronnouns ? user.pronnouns : ''} {...register('pronouns')} />
                </div>
                
                <div>
                  <label htmlFor="number" className='label-form'>Número de telefone</label>
                  <MaskedInput mask="(99) 9 9999-9999" type="text" placeholder="Digite seu número de telefone" defaultValue={user.number ? user.number : ''} {...register('number')} />
                </div>
                
                <div>
                  <label htmlFor="isActive" className='label-form'>Exibição:</label>
                  <Select {...register('isActive')}>
                    <option value="true">Exibir meu currículo em buscas</option>
                    <option value="false">Não exibir meu currículo em buscas</option>
                  </Select>
                </div>

                <div>
                  <label htmlFor='title' className='label-form'>Título</label>
                  <Input type="text" placeholder="Ex: Vendedor externo" defaultValue={user.title ? user.title : ''} {...register('title')} />
                </div>
               
                <div>
                  <label htmlFor='bio' className='label-form'>Biografia</label>
                  <TextArea placeholder="Escreva um pouco sobre você" defaultValue={user.bio ? user.bio : ''} {...register('bio')} />
                </div>
             
                <div>
                  <label htmlFor='gender' className='label-form'>Gênero</label>
                  <Input type='text' placeholder="Ex: Mulher Trans" defaultValue={user.gender ? user.gender : ''} {...register('gender')} />
                </div>
               
                <Button type="submit">Salvar alterações</Button>
            </FormStyle>
        </>
    )
}