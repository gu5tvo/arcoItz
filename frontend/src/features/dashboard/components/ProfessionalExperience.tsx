import React, { useEffect, useState } from 'react';
import { useUser } from '../../../hooks/contexts';
import Graduation from './Graduation';
import { GenericContentStyle } from '../style';
import ManageFieldsQuantity from './ManageFieldsQuantity';

export default function ProfessionalExperiene() {
  const { courses, profile } = useUser();

  const [graduationNumber, setGraduationNumber] = useState(1);

  const decrementGraduationNumber = ()=> setGraduationNumber((cur)=> cur > 1 ? cur - 1 : 1)

  const incrementGraduationNumber = ()=> setGraduationNumber((cur)=> cur + 1)

  useEffect(()=> {
    profile({ coursesData: true, userData: true })
  }, [])

  const graduationComponents = Array.from({ length: graduationNumber }, (_, index) => (
    <Graduation key={index} />
  ));

  return (
    <GenericContentStyle>
      <div>
      {
        courses?.map((course, index)=> {
            return <Graduation key={index} description={course.description} doesExist from={course.from} id={course.id} institution={course.institution} name={course.name} status={course.status} to={course.to} type={course.type}/>
        })
      } 

      { graduationComponents }

      </div>

      <ManageFieldsQuantity incrementQuantity={incrementGraduationNumber} decrementQuantity={decrementGraduationNumber} type='formação'/>

    </GenericContentStyle>
  );
}
