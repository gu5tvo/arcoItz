import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useModal, useUser } from '../../../hooks/contexts';
import { useForm } from 'react-hook-form';
import { Button, FormStyle, Input, Select, TextArea , Image, DivSpaceStyle} from '../styles';
import DefaultPfp from '../../../assets/profile-picture.svg'

import MaskedInput from 'react-text-mask'

interface SubmitData {
  pronouns: string;
  showCV: string;
  title: string;
  bio: string;
  gender: string;
}
export default function ProfileScreen(): JSX.Element {

    const { updateProfile, user } = useUser();
    const { register, handleSubmit } = useForm();
    const { setPicture, setRequest } = useModal();
    const navigate = useNavigate();
    const [phone, setPhone] = useState("")
    
    const [pfp, setPfp] = useState("");
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[user])

    const onSetPicture = () => {
      setRequest({ source: 'user', id: user.id, setPfp })
      setPicture(true)
    }

    const onSubmit = ({pronouns, title, showCV, bio, gender}: SubmitData)=> {

      updateProfile({ bio: (bio ? bio : undefined), gender: (gender ? gender : undefined), pronouns: (pronouns ? pronouns : undefined), title: (title ? title : undefined), isActive: (showCV === 'true'), phone: (phone ? phone : undefined)}) 
    }


    return (
        <>

          <DivSpaceStyle>
            <Image src={pfp ? pfp : user.avatar ? user.avatar : DefaultPfp} alt={"foto de " + user.name} />
            <Button onClick={onSetPicture}>Alterar foto</Button>
          </DivSpaceStyle>
            

            <FormStyle onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="pronouns" className='label-form'>Pronomes</label>
                  <Input type="text" placeholder="Escreva seu pronome - elu/delu" defaultValue={user.pronouns ? user.pronouns : ''} {...register('pronouns')} />
                </div>
                
                <div onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value)}>
                  <label htmlFor="phone" className='label-form'>Número de telefone</label>
                  <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Digite seu número de telefone" defaultValue={user.phone ? user.phone : ''} className="phone-input"  {...register('phone')} />
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