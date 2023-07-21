import React, { useEffect, useState } from 'react'
import { useUser, useAdmin } from '../../../hooks/contexts'
import { useForm } from 'react-hook-form'
import { Input, Select, Button, FormStyle } from '../styles';
import MaskedInput from 'react-text-mask'

interface SubmitData {
    email: string,
    city: string,
    instagram: string,
    linkedin: string,
    portfolio: string
}

export default function ContactScreen(): JSX.Element {

    const { user, updateProfile } = useUser();
    const { cities, listCities } = useAdmin();
    const { register, handleSubmit } = useForm();
    const [phone, setPhone] = useState(user.phone)

    useEffect(()=> {
        listCities()
    }, [])

    const onSubmit = ({ email, city, instagram, linkedin, portfolio }: SubmitData)=> {
        updateProfile({
            email: email ? email : undefined,
            city: city ? city : undefined,
            instagram: instagram ? instagram : undefined,
            linkedin: linkedin ? linkedin : undefined,
            portfolio: portfolio ? portfolio : undefined,
            phone: phone ? phone : undefined
        })
    }
    return (
        <>
            <FormStyle onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email" className='label-form'>E-mail</label>
                    <Input type="email" placeholder="Digite seu e-mail" {...register('email')} defaultValue={user.email}/>
                </div>

                <div onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value)}>
                  <label htmlFor="phone" className='label-form'>Número de telefone</label>
                  <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Digite seu número de telefone" defaultValue={user.phone ? user.phone : ''} className="phone-input"  {...register('phone')} />
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