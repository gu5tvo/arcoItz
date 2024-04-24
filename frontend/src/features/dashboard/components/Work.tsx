import React, { useState } from "react"
import { BasicInfos, Description, StandardInput } from "../style/inputs"
import { useForm } from "react-hook-form"
import { useExperience } from "../../../hooks/contexts"
import DateInput from "./Inputs/Date";
import { ExperienceInfos } from "../style/experience";
import SubmitExperience from "./Inputs/SubmitExperience";

interface OnSubmitData {
    title: string;
    location: string;
    from: string;
    to: string;
    description: string;
    company: string
}

interface WorkProps {
    doesExist?: boolean,
    id?: string,
    title?: string,
    location?: string,
    description?: string,
    from?: string,
    to?: string,
    company?: string
}

export default function Work({ id, doesExist, description, from: originalFrom, location, title, to: originalTo, company }: WorkProps) {
    const { registerExperience, updateExperience, deleteExperience} = useExperience()
    
    const { register, handleSubmit, reset } = useForm()

    const [deleted, setDeleted] = useState(false)
    const [from, setFrom] = useState(originalFrom ? originalFrom : '')
    const [to, setTo] = useState(originalTo ? originalTo : '')


    const onSubmit = ({ title, location, description, company }: OnSubmitData)=> {
        if (doesExist){
            updateExperience(id, { title, location, from, to, description, company })
        }
        else {
            registerExperience({ title, location, from, to, description, company })
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
  
        <ExperienceInfos onSubmit={handleSubmit(onSubmit)}>           
            <BasicInfos>
                <StandardInput 
                    type="text"
                    placeholder='Cargo (obrigatório)'
                    defaultValue={title}
                    {...register('title')}
                />

                <StandardInput 
                    type="text"
                    placeholder='Companhia/Ambiente de trabalho (obrigatório)'
                    defaultValue={company}
                    {...register('company')}
                />

                <DateInput 
                    name='from' 
                    placeholder="Início (obrigatório)" 
                    register={register} 
                    setFunc={setFrom} 
                    value={from}
                />

                <DateInput 
                    name='to' 
                    placeholder="Fim" 
                    register={register} 
                    setFunc={setTo} 
                    value={to}
                />

                <StandardInput 
                    type="text"
                    placeholder='Localização'
                    defaultValue={location}
                    {...register('location')}
                />

            </BasicInfos>
            
            <Description
                spellCheck={false} 
                placeholder="Descrição" 
                defaultValue={description} 
                {...register('description')}
            />

            <SubmitExperience doesExist={doesExist} name='experiência' onDelete={onDelete}/>

        </ExperienceInfos>

    </>)
}