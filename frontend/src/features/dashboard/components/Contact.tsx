import React, { useEffect, useState } from 'react'
import { useUser, useAdmin } from '../../../hooks/contexts'
import { useForm } from 'react-hook-form'
import { Input, Select, Button, FormStyle, InputArea, Label } from '../style';
import { Phone } from '../style/contact';

interface SubmitData {
    email: string,
    city: string,
    instagram: string,
    linkedin: string,
    portfolio: string
}

export default function ContactScreen() {

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
                <InputArea>
                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" placeholder="Digite seu e-mail" {...register('email')} defaultValue={user.email}/>
                </InputArea>

                <InputArea onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value)}>
                  <Label htmlFor="phone">Número de telefone</Label>
                  <Phone mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Digite seu número de telefone" defaultValue={user?.phone ? user.phone : ''} className="phone-input"  {...register('phone')} />
                </InputArea>

                <InputArea>
                    <Label htmlFor="city">Cidade</Label>
                    <Select {...register('city')}>
                        {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
                    </Select>
                </InputArea>

                <InputArea>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input type="text" placeholder="Digite seu Instagram" {...register('instagram')} defaultValue={user.instagram ? user.instagram : ''}/>
                </InputArea>

                <InputArea>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input type="text" placeholder="Digite seu LinkedIn" {...register('linkedin')} defaultValue={user.linkedin ? user.linkedin : ''}/>
                </InputArea>

                <InputArea>
                    <Label htmlFor="portfolio">Portfolio</Label>
                    <Input type="text" placeholder="Digite seu Portfolio" {...register('portfolio')} defaultValue={user.portfolio ? user.portfolio : ''}/>
                </InputArea>
                
                <Button type="submit">Salvar alterações</Button>
            </FormStyle>
        </>
    )
}