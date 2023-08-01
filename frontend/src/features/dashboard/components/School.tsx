import React, { useEffect, useState } from 'react';
import { useUser } from '../../../hooks/contexts';
import Graduation from './Graduation';
import { SchoolScreenStyle } from '../style';
import addIconFormation from '../../../assets/addIconFormation.svg';
import removeIconFormation from '../../../assets/removeIconFormation.svg';
import { IconsDivStyle, Label } from '../style';

export default function SchoolScreen(): JSX.Element {
  const { courses, profile } = useUser();

  const [graduationNumber, setGraduationNumber] = useState(1);

  function decrementGraduationNumber() {
    if (graduationNumber > 1) 
      setGraduationNumber(graduationNumber - 1);
  }

  useEffect(()=> {
    profile({ coursesData: true, userData: true })
  }, [])

  const graduationComponents = Array.from({ length: graduationNumber }, (_, index) => (
    <Graduation key={index} />
  ));

  return (
    <SchoolScreenStyle>
      <Label>Formações</Label>

      <div>
      {
        courses?.map((course, index)=> {
            return <Graduation key={index} description={course.description} doesExist from={course.from} id={course.id} institution={course.institution} name={course.name} status={course.status} to={course.to} type={course.type}/>
        })
      } 

      {
        graduationComponents
      }

      </div>

      <IconsDivStyle>
        <button onClick={() => setGraduationNumber(graduationNumber + 1)}>
          <img src={addIconFormation} alt="Add Icon Formation" className='add' />
          <span>adicionar formação</span>
        </button>

        <button onClick={decrementGraduationNumber}>
          <span>remover formação</span>
          <img src={removeIconFormation} alt="Remove Icon Formation" className='remove' />
        </button>
      </IconsDivStyle>
    </SchoolScreenStyle>
  );
}
