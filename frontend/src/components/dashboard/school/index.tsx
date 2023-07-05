import React, { useState } from 'react';
import { useUser } from '../../../hooks/contexts';
import { useForm } from 'react-hook-form';
import Graduation from './Graduation';
import {  SchoolScreenStyle } from './style';
import addIconFormation from '../../../assets/addIconFormation.svg';
import removeIconFormation from '../../../assets/removeIconFormation.svg';
import { IconsDivStyle, Label } from '../styles';

export default function SchoolScreen(): JSX.Element {
  const { updateProfile } = useUser();
  const { register, handleSubmit } = useForm();

  const [graduationNumber, setGraduationNumber] = useState(1);

  function decrementGraduationNumber() {
    if (graduationNumber > 1) 
      setGraduationNumber(graduationNumber - 1);
  }

  const graduationComponents = Array.from({ length: graduationNumber }, (_, index) => (
    <Graduation key={index} />
  ));

  return (
    <SchoolScreenStyle>
      <Label>Formações</Label>

      {graduationComponents}

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
