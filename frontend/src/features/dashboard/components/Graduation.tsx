import React, { useState } from "react"
import { GraduationStyle } from "../style"
import MaskedInput from 'react-text-mask'
import { useForm } from "react-hook-form"
import { useCourses } from "../../../hooks/contexts";

interface OnSubmitData {
    name: string;
    institution: string;
    from: string;
    to: string;
    description: string;
    type: string;
    status: string
}

interface CourseProps {
    doesExist?: boolean,
    id?: string,
    type?: string,
    name?: string,
    institution?: string,
    description?: string,
    from?: string,
    to?: string,
    status?: string
}

export default function Graduation({ id, doesExist, description, from: originalFrom, institution, name, to: originalTo, type, status }: CourseProps): JSX.Element {
    const { registerCourse, updateCourse, deleteCourse } = useCourses()
    const { register, handleSubmit, reset } = useForm()
    const [courseFinished, setCourseFinished] = useState(true)
    const [deleted, setDeleted] = useState(false)
    const [from, setFrom] = useState(originalFrom ? originalFrom : '')
    const [to, setTo] = useState(originalTo ? originalTo : '')

    const onChangeStatus = (e)=> {
        if (e.target.value === 'Andamento') {
            setCourseFinished(false)
            setTo("")
        } else { 
            setCourseFinished(true)
        }
    }

    const onSubmit = ({ name, institution, description, type, status }: OnSubmitData)=> {
        if (doesExist){
            updateCourse(id, { name, institution, from, to, type, description, status })
        }
        else {
            registerCourse({ name, institution, from, to, type, description, status })
            reset()
            setTo("")
            setFrom("")
        }
    }

    const onDelete = ()=> {
        setDeleted(true)
        deleteCourse(id)
    }

    if (deleted) return <></>

    return (
    <>  
  
        <GraduationStyle onSubmit={handleSubmit(onSubmit)}>
   
            
            <div className="inner-div">
                <input type="text"  placeholder='Curso' defaultValue={name}{...register('name')}/>

                <select defaultValue={type ? type : ''} {...register('type')}>
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
                
                <input type="text" defaultValue={institution ? institution : ''} placeholder='Instituição' {...register('institution')}/>

                 <select name="uh" id="he"  {...register('status')} onChange={onChangeStatus} defaultValue={status ? status : ''} >
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
            
            <textarea spellCheck={false} placeholder="Descrição" className="description"  defaultValue={description} {...register('description')}/>

            <span className="button-area">
            <button type='submit'>{doesExist ? "Editar" : "Salvar"} curso</button>
            { doesExist && <button onClick={onDelete}>Excluir curso</button>}
            </span>
        </GraduationStyle>

    </>)
}