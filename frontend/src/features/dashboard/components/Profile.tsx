import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAdmin, useUser } from '../../../hooks/contexts';
import { useForm } from 'react-hook-form';
import { Button, FormStyle, Input, InputArea, Label, Select, TextArea } from '../style';
import { PictureModal } from '../../../features';

interface SubmitData {
  pronouns: string;
  title: string;
  bio: string;
  gender: string;
  name: string;
}

export default function ProfileScreen(): JSX.Element {

    const { updateProfile, user } = useUser();
    const { listSectors, sectors } = useAdmin()
    const { register, handleSubmit } = useForm();
    
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState<boolean>(user.isActive)
    const [area, setArea] = useState(user.area)
    

    useEffect(()=>{
      if(!user){
        navigate('/login')
      }
      listSectors()
    },[user])

    const onSubmit = ({pronouns, title, bio, gender, name}: SubmitData)=> {

      updateProfile({ 
        name,
        bio: bio ?? undefined,
        gender: gender ?? undefined,
        pronouns: pronouns ?? undefined,
        title: title ?? undefined,
        isActive,
        area: area ?? "none"
      })
    }
    
    
    return (
        <>
          <PictureModal avatar={user.avatar} name={user.name} source="user"/>  

            <FormStyle onSubmit={handleSubmit(onSubmit)}>
                <InputArea>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input type="text" placeholder="Escreva seu nome completo" defaultValue={user.name} {...register('name')} />
                </InputArea>

                <InputArea>
                  <Label htmlFor="pronouns">Pronomes</Label>
                  <Input type="text" placeholder="Escreva seu pronome - elu/delu" defaultValue={user.pronouns ? user.pronouns : ''} {...register('pronouns')} />
                </InputArea>

                <InputArea>
                  <Label htmlFor="area">Área:</Label>
                  <Select {...register('area')} defaultValue={user.area} onChange={(e)=>setArea(e.target.value)}>
                    <option value=""></option>
                    {
                      sectors.map((area, index)=> {
                        return <option key={index} value={area.name}>{area.name}</option>
                      })
                    }
                  </Select>
                </InputArea>

                <InputArea>
                  <Label htmlFor="isActive">Exibição:</Label>
                  <Select {...register('isActive')} defaultValue={isActive ? 'true' : 'false'} onChange={(e)=>setIsActive(e.target.value === 'true')}>
                    <option value="true">Exibir meu currículo em buscas</option>
                    <option value="false">Não exibir meu currículo em buscas</option>
                  </Select>
                </InputArea>

                <InputArea>
                  <Label htmlFor='title'>Título</Label>
                  <Input type="text" placeholder="Ex: Vendedor externo" defaultValue={user.title ? user.title : ''} {...register('title')} />
                </InputArea>
               
                <InputArea>
                  <Label htmlFor='bio'>Biografia</Label>
                  <TextArea placeholder="Escreva um pouco sobre você" defaultValue={user.bio ? user.bio : ''} {...register('bio')} />
                </InputArea>
             
                <InputArea>
                  <Label htmlFor='gender'>Gênero</Label>
                  <Input type='text' placeholder="Ex: Mulher Trans" defaultValue={user.gender ? user.gender : ''} {...register('gender')} />
                </InputArea>
               
                <Button type="submit">Salvar alterações</Button>
            </FormStyle>
        </>
    )
}