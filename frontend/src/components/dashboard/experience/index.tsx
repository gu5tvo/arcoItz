import React, { useState } from "react";
import { useUser } from "../../../hooks/contexts";
import { useForm } from "react-hook-form";
import { IconsDivStyle, Label } from "../styles";
import addIconFormation from "../../../assets/addIconFormation.svg";
import removeIconFormation from "../../../assets/removeIconFormation.svg";

import Experience from "./Experience";
import { ExperienceScreenStyle } from "./style";

export default function ExperienceScreen(): JSX.Element {
  const { updateProfile } = useUser();
  const { register, handleSubmit } = useForm();

  const [experienceNumber, setExperienceNumber] = useState(1);

  function decrementExperienceNumber() {
    if (experienceNumber > 1) setExperienceNumber(experienceNumber - 1);
  }

  const graduationComponents = Array.from(
    { length: experienceNumber },
    (_, index) => <Experience key={index} />
  );
  return (
    <>
      <ExperienceScreenStyle>
        <Label>Experiências</Label>

        {graduationComponents}

        <IconsDivStyle>
          <button onClick={() => setExperienceNumber(experienceNumber + 1)}>
            <img
              src={addIconFormation}
              alt="Add Icon Formation"
              className="add"
            />
            <span>adicionar experiência</span>
          </button>

          <button onClick={decrementExperienceNumber}>
            <span>remover experiência</span>
            <img
              src={removeIconFormation}
              alt="Remove Icon Formation"
              className="remove"
            />
          </button>
        </IconsDivStyle>
      </ExperienceScreenStyle>
    </>
  );
}
