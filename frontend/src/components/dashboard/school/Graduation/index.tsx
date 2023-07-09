import React, { useEffect, useState } from "react"
import { GraduationStyle } from "./style"
import MaskedInput from 'react-text-mask'
import { useForm } from "react-hook-form"
import { useCourses, useUser } from "../../../../hooks/contexts";

interface OnSubmitData {
    name: string;
    institution: string;
    from: string;
    to: string;
    description: string;
    ownerId: string
    type: string;
}
export default function Graduation(): JSX.Element {

    const { user } = useUser()
    const { registerCourse } = useCourses()
    const { register, handleSubmit } = useForm()
    const [courseFinished, setCourseFinished] = useState(true)
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    const onChangeStatus = (e)=> {
        if (e.target.value === 'Interrompido') {
            setCourseFinished(false)
            setTo("")
        } else { 
            setCourseFinished(true)
        }
    }

    const onSubmit = ({ name, institution, description, type }: OnSubmitData)=> {
        console.log("dsds")
        registerCourse({ name, institution, from, to, type, description })
        console.log("dsdsasdasd")
    }

    return (
    <>  
  
        <GraduationStyle onSubmit={handleSubmit(onSubmit)}>
   
            
            <div className="inner-div">
              <input type="text"  placeholder='Curso' {...register('name')}/>
               <select name="" id="" {...register('type')}>
                    <option value="">Tipo</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Tecnólogo">Tecnólogo</option>
                    <option value="Licenciatura">Licenciatura</option>
                    <option value="Bacharelado">Bacharelado</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                    <option value="Especialização ou MBA">Especialização ou MBA</option>
                    <option value="Outro">Outro</option>

               </select>
                <input type="text" placeholder='Instituição' {...register('institution')}/>
                 <select name="" id="" onChange={onChangeStatus} >
                      <option value="">Situação</option>
                      <option value="Concluído">Concluído</option>
                      <option value="Andamento">Andamento</option>
                      <option value="Interrompido">Interrompido</option>
                      <option value="Outra">Outra</option>
                 </select>

                <span onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFrom(e.target.value)}>
                    <MaskedInput mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Início" value={from} className="input"  {...register('from')} />
                 </span>
                <span onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTo(e.target.value)} >
                    <MaskedInput mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Fim" value={to} className={`input ${courseFinished ?  '' : 'lock'}`}  {...register('to')} />
                 </span>
            </div>
            
            <textarea placeholder="Descrição" className="description" {...register('description')}/>

            <button type='submit'>Salvar curso</button>
        </GraduationStyle>

    </>)
}