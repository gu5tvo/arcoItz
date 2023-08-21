import React, { useState } from "react"
import { BasicInfos, Description, StandardInput } from "../style/inputs"
import { useForm } from "react-hook-form"
import { useCourses } from "../../../hooks/contexts"
import SelectInput from "./Inputs/Select";
import DateInput from "./Inputs/Date";
import { ExperienceInfos } from "../style/experience";
import SubmitExperience from "./Inputs/SubmitExperience";

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
  
        <ExperienceInfos onSubmit={handleSubmit(onSubmit)}>
   
            
            <BasicInfos>
                <StandardInput 
                    type="text"  
                    placeholder='Curso' 
                    defaultValue={name}
                    {...register('name')}
                />

                <SelectInput 
                    register={register} 
                    defaultValue={type} 
                    selectName='type' 
                    optionsNames={[
                    "Técnico", "Tecnólogo", "Licenciatura", "Bacharelado", "Mestrado", "Doutorado", "Especialização ou MBA", "Outro"
                ]}/>

                <StandardInput
                    type="text" 
                    defaultValue={institution} 
                    placeholder='Instituição' 
                    {...register('institution')}
                />

                <SelectInput 
                    register={register} 
                    defaultValue={status} 
                    selectName='status' 
                    onChange={onChangeStatus}
                    optionsNames={[
                    "Concluído", "Andamento", "Interrompido", "Outro"
                ]}/>

                <DateInput 
                    name='from' 
                    placeholder="Início" 
                    register={register} 
                    setFunc={setFrom} 
                    value={from}
                />

                <DateInput 
                    blockInput={!courseFinished} 
                    name='to' 
                    placeholder="Fim" 
                    register={register} 
                    setFunc={setTo} 
                    value={to}
                />
            </BasicInfos>
            
            <Description
                spellCheck={false} 
                placeholder="Descrição" 
                defaultValue={description} 
                {...register('description')}
            />

            <SubmitExperience doesExist={doesExist} name='curso' onDelete={onDelete}/>

        </ExperienceInfos>

    </>)
}