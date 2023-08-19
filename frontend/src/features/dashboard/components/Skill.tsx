import React, { useState, useEffect } from 'react';
import { useSkill, useUser } from '../../../hooks/contexts';
import { GenericContentStyle } from '../style';
import { iSkills } from '../../../interfaces/users';
import { Input, SkillsCollection, SkillInputArea, AddSkillBtn, WrapperDiv } from '../style/skill';
import SkillCard from './SkillCard';

export default function Skills() {

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
      <GenericContentStyle>
        <WrapperDiv>
          <SkillInputArea>
            <Input
              type='text'
              onChange={updateText}
              onKeyDown={handleEnter}
              value={name}
              placeholder='Digite habilidade e aperte enter'/>
            <AddSkillBtn onClick={onClick}>&#10004;</AddSkillBtn>
         </SkillInputArea>
        </WrapperDiv>
       
        <SkillsCollection>
           {
            skills?.map((skill)=> {
              return <SkillCard onDelete={onDelete(skill.id)} content={skill.name} key={skill.id}/>
            })
           }
        </SkillsCollection> 

      </GenericContentStyle>
    </>
  );
}
