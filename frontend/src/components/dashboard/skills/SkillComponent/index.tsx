import React, { useState } from "react";
import { SkillComponentStyle } from "./style";
import { useSkill, useUser } from "../../../../hooks/contexts";

interface SkillComponentProps {
  content: string;
  id: string;
  onDelete: () => void
}

const SkillComponent: React.FC<SkillComponentProps> = ({ content, id, onDelete }) => {
    
  const [text, setText] = useState(content);
  const { profile } = useUser()

  const handleHover = () => {
    setText("excluir habilidade");
  };

  const handleLeave = () => {
    setText(content);
  };

  const onClick = ()=> {
    onDelete()    
    setText("")
    profile({ skillsData: true })
  }

  return (
    <SkillComponentStyle onMouseEnter={handleHover} onClick={onClick} onMouseLeave={handleLeave}>
      {text}
    </SkillComponentStyle>
  );
};

export default SkillComponent;
