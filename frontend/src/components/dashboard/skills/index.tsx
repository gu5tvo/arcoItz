import React, { useState, useEffect } from 'react';
import { useSkill, useUser } from '../../../hooks/contexts';
import { Label } from '../styles';
import { SkillComponentCollection, SkillsScreenStyle } from './style';
import SkillComponent from './SkillComponent';
import { iSkills } from '../../../interfaces/users';
export default function SkillsScreen(): JSX.Element {

  const { registerSkill, deleteSkill } = useSkill();
  const { skills, profile } = useUser()
  const [name, setName] = useState('');

  const updateText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(()=>{
    profile({ skillsData: true })
  }, [])

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement> ) => {
    if (event.key === 'Enter' && name) {
      const data: iSkills ={ name }

      setName("")
      registerSkill(data);
    }
}

const onDelete = (id: string)=> {
  return ()=> { 
    deleteSkill(id) 
  }
}

const onClick = ()=> {
  if (name) {
    setName("")
    registerSkill({ name });
  }
}

  return (
    <>
      <SkillsScreenStyle>
        <div className='major-div'>
          <Label> Habilidades </Label>
          <span>
            <input
              type='text'
              onChange={updateText}
              onKeyDown={handleEnter}
              value={name}
              placeholder='Digite habilidade e aperte enter'/>
            <button className="tick-btn" onClick={onClick}>&#10004;</button>
         </span>
        </div>
        
        <SkillComponentCollection>
           {
            skills?.map((skill)=> {
              return <SkillComponent onDelete={onDelete(skill.id)} content={skill.name} id={skill.id} key={skill.id}/>
            })
           }
        </SkillComponentCollection>

      </SkillsScreenStyle>
    </>
  );
}
