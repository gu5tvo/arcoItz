import React, { useEffect, useState } from "react"
import { ExperienceStyle } from "./style"
import MaskedInput from 'react-text-mask'
import { useForm } from "react-hook-form"
import { useExperience } from "../../../../hooks/contexts";

interface OnSubmitData {
    title: string;
    company: string;
    from: string;
    to: string;
    location: string;
    description: string;
}

interface ExperienceProps {
    doesExist?: boolean,
    id?: string;
    title?: string;
    company?: string;
    location?: string;
    from?: string;
    to?: string;
    description?: string;
}

export default function Experience({ id, doesExist, description, from: originalFrom, company, title, to: originalTo, location }: ExperienceProps): JSX.Element {
    const { registerExperience, updateExperience, deleteExperience } = useExperience()

    const { register, handleSubmit, reset } = useForm()
    const [deleted, setDeleted] = useState(false)
    const [from, setFrom] = useState(originalFrom ? originalFrom : '')
    const [to, setTo] = useState(originalTo ? originalTo : '')

    const onSubmit = ({ title, company, description, location }: OnSubmitData)=> {
        if (doesExist){
            updateExperience(id, { title, company, from, to, location, description })
        }
        else {
            registerExperience({ title, company, from, to, description, location })
            reset()
            setTo("")
            setFrom("")
        }
    }

    const onDelete = ()=> {
        setDeleted(true)
        deleteExperience(id)
    }

    if (deleted) return <></>

    return (
    <>  
  
        <ExperienceStyle onSubmit={handleSubmit(onSubmit)}>
   
            
            <div className="inner-div">
                <input type="text"  placeholder='Cargo (obrigatório)' defaultValue={title} {...register('title')}/>
                
                <input type="text" defaultValue={company ? company : ''} placeholder='Companhia / Ambiente de trabalho (obrigatório)' {...register('company')}/>

                <span onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFrom(e.target.value)}>

                    <MaskedInput mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Início (obrigatório)" value={from} className="input"  {...register('from')} />

                 </span>

                <span onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTo(e.target.value)} >
                    <MaskedInput mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Fim" value={to} className={"input"}  {...register('to')} />
                 </span>

                 <input type="text"  placeholder='Localização' defaultValue={location} {...register('location')}/>
            </div>
            
            <textarea spellCheck={false} placeholder="Descrição" className="description"  defaultValue={description} {...register('description')}/>

            <span className="button-area">
            <button type='submit'>{doesExist ? "Editar" : "Salvar"} Experiência</button>
            { doesExist && <button onClick={onDelete}>Excluir Experiência</button>}
            </span>
        </ExperienceStyle>

    </>)
}