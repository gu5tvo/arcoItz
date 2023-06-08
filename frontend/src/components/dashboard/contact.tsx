import React from 'react'
import { useUser, useAdmin } from '../../hooks/contexts'
import { useForm } from 'react-hook-form'
import { Image, Input, Label, Select, Button, MaskedInput } from './styles';

export default function ContactScreen(): JSX.Element {

    const { user, updateProfile } = useUser();
    const { cities } = useAdmin();
    const { register, handleSubmit } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit(updateProfile)}>
                <Label htmlFor="email">E-mail</Label>
                <Input type="email" placeholder="Digite seu e-mail" {...register('email')} defaultValue={user.email}/>
                <Label htmlFor='address'>Endereço</Label>
                <Input type="text" placeholder="Ex: Rua Exemplo - Nova Imperatriz" {...register('address')}  defaultValue={user.address ? user.address : ''}/>
                <Label htmlFor="city">Cidade</Label>
                <Select {...register('city')}>
                    {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
                </Select>
                <Label htmlFor="instagram">Instagram</Label>
                <Input type="text" placeholder="Digite seu Instagram" {...register('instagram')} defaultValue={user.instagram ? user.instagram : ''}/>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input type="text" placeholder="Digite seu LinkedIn" {...register('linkedin')} defaultValue={user.linkedin ? user.linkedin : ''}/>
                <Label htmlFor="portfolio">Portfolio</Label>
                <Input type="text" placeholder="Digite seu Portfolio" {...register('portfolio')} defaultValue={user.portfolio ? user.portfolio : ''}/>
                <Button type="submit">Salvar alterações</Button>
            </form>
        </>
    )
}