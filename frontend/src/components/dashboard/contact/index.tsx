import React from 'react'
import { useUser, useAdmin } from '../../../hooks/contexts'
import { useForm } from 'react-hook-form'
import { Input, Select, Button, FormStyle } from '../styles';

export default function ContactScreen(): JSX.Element {

    const { user, updateProfile } = useUser();
    const { cities } = useAdmin();
    const { register, handleSubmit } = useForm();

    return (
        <>
            <FormStyle onSubmit={handleSubmit(updateProfile)}>
                <div>
                    <label htmlFor="email" className='label-form'>E-mail</label>
                    <Input type="email" placeholder="Digite seu e-mail" {...register('email')} defaultValue={user.email}/>
                </div>

                <div>
                    <label htmlFor='address' className='label-form'>Endereço</label>
                    <Input type="text" placeholder="Ex: Rua Exemplo - Nova Imperatriz" {...register('address')}  defaultValue={user.address ? user.address : ''}/>
                </div>

                <div>
                    <label htmlFor="city" className='label-form'>Cidade</label>
                    <Select {...register('city')}>
                        {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
                    </Select>
                </div>

                <div>
                    <label htmlFor="instagram" className='label-form'>Instagram</label>
                    <Input type="text" placeholder="Digite seu Instagram" {...register('instagram')} defaultValue={user.instagram ? user.instagram : ''}/>
                </div>

                <div>
                    <label htmlFor="linkedin" className='label-form'>LinkedIn</label>
                    <Input type="text" placeholder="Digite seu LinkedIn" {...register('linkedin')} defaultValue={user.linkedin ? user.linkedin : ''}/>
                </div>

                <div>
                    <label htmlFor="portfolio" className='label-form'>Portfolio</label>
                    <Input type="text" placeholder="Digite seu Portfolio" {...register('portfolio')} defaultValue={user.portfolio ? user.portfolio : ''}/>
                </div>
                
                <Button type="submit">Salvar alterações</Button>
            </FormStyle>
        </>
    )
}