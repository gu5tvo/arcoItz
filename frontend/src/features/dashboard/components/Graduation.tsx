import React, { useState } from "react"
import { BasicInfos, GraduationInfos, InputField, SelectCourseInfos, DateInput, DateInputContainer, CourseDescription, SubmitCourseArea, SubmitCourseButton } from "../style/School"
import { useForm } from "react-hook-form"
import { useCourses } from "../../../hooks/contexts"

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
    status?: string,
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
  
        <GraduationInfos onSubmit={handleSubmit(onSubmit)}>
   
            
            <BasicInfos>
                <InputField type="text"  placeholder='Curso' defaultValue={name}{...register('name')}/>

                <SelectCourseInfos defaultValue={type ? type : ''} {...register('type')}>
                    <option value="">Tipo</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Tecnólogo">Tecnólogo</option>
                    <option value="Licenciatura">Licenciatura</option>
                    <option value="Bacharelado">Bacharelado</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                    <option value="Especialização ou MBA">Especialização ou MBA</option>
                    <option value="Outro">Outro</option>
                </SelectCourseInfos>
                
                <InputField type="text" defaultValue={institution ? institution : ''} placeholder='Instituição' {...register('institution')}/>

                 <SelectCourseInfos {...register('status')} onChange={onChangeStatus} defaultValue={status ? status : ''} >
                      <option value="">Situação</option>
                      <option value="Concluído">Concluído</option>
                      <option value="Andamento">Andamento</option>
                      <option value="Interrompido">Interrompido</option>
                      <option value="Outra">Outra</option>
                 </SelectCourseInfos>

                <DateInputContainer onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFrom(e.target.value)}>

                    <DateInput mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Início" value={from} {...register('from')} />

                 </DateInputContainer>

                <DateInputContainer onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTo(e.target.value)} >
                    <DateInput $courseFinished={courseFinished} mask={[/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" placeholder="Fim" value={to}{...register('to')} />
                 </DateInputContainer>
            </BasicInfos>
            
            <CourseDescription spellCheck={false} placeholder="Descrição" defaultValue={description} {...register('description')}/>

            <SubmitCourseArea className="button-area">
                <SubmitCourseButton type='submit'>{doesExist ? "Editar" : "Salvar"} curso</SubmitCourseButton>
                { doesExist && <SubmitCourseButton onClick={onDelete}>Excluir curso</SubmitCourseButton>}
            </SubmitCourseArea>
        </GraduationInfos>

    </>)
}