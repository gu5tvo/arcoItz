import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAdmin, useUser } from '../../../hooks/contexts';
import { useForm } from 'react-hook-form';
import { Button, FormStyle, Input, Select, TextArea } from '../style';
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
      updateProfile({ name, bio: (bio ? bio : undefined), gender: (gender ? gender : undefined), pronouns: (pronouns ? pronouns : undefined), title: (title ? title : undefined), isActive, area: area ? area : "none"})
    }
    
    
    return (
        <>
          <PictureModal avatar={user.avatar} name={user.name} source="user"/>  

            <FormStyle onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className='label-form'>Nome completo</label>
                  <Input type="text" placeholder="Escreva seu nome completo" defaultValue={user.name} {...register('name')} />
                </div>

                <div>
                  <label htmlFor="pronouns" className='label-form'>Pronomes</label>
                  <Input type="text" placeholder="Escreva seu pronome - elu/delu" defaultValue={user.pronouns ? user.pronouns : ''} {...register('pronouns')} />
                </div>

                <div>
                  <label htmlFor="area" className='label-form'>Área:</label>
                  <Select {...register('area')} defaultValue={user.area} value={area} onChange={(e)=>setArea(e.target.value)}>
                    <option value=""></option>
                    {
                      sectors.map((area, index)=> {
                        return <option key={index} value={area.name}>{area.name}</option>
                      })
                    }
                  </Select>
                </div>

                <div>
                  <label htmlFor="isActive" className='label-form'>Exibição:</label>
                  <Select {...register('isActive')} defaultValue={isActive ? 'true' : 'false'} onChange={(e)=>setIsActive(e.target.value === 'true')}>
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