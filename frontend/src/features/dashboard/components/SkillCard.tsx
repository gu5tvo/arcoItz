import React, { useState } from "react";
import { StyledSkillCard } from "../style/skill";
import { useUser } from "../../../hooks/contexts";

interface SkillCardProps {
  content: string;
  onDelete: () => void
}

export default function SkillCard({ content, onDelete }: SkillCardProps) {
    
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
    profile({ skillsData: true })
  }

  return (
    <StyledSkillCard onMouseEnter={handleHover} onClick={onClick} onMouseLeave={handleLeave}>
      {text}
    </StyledSkillCard>
  );
}
