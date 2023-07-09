import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks/contexts";
import { useForm } from "react-hook-form";
import { IconsDivStyle, Label } from "../styles";
import addIconFormation from "../../../assets/addIconFormation.svg";
import removeIconFormation from "../../../assets/removeIconFormation.svg";

import Experience from "./Experience";
import { ExperienceScreenStyle } from "./style";

export default function ExperienceScreen(): JSX.Element {

  const [experienceNumber, setExperienceNumber] = useState(1);
  const { experiences, profile } = useUser()

  function decrementExperienceNumber() {
    if (experienceNumber > 1) setExperienceNumber(experienceNumber - 1);
  }

  useEffect(()=> {
    profile({ experiencesData: true })
  }, [])

  const graduationComponents = Array.from(
    { length: experienceNumber },
    (_, index) => <Experience key={index} />
  );
  return (
    <>
      <ExperienceScreenStyle>
        <Label>Experiências</Label>

      <div>
        {
          experiences?.map((experience, index)=> {
            return <Experience key={index} company={experience.company} description={experience.description} doesExist from={experience.from} to={experience.to} id={experience.id} location={experience.location} title={experience.title} />
          })
        }

        {graduationComponents}  
      </div>
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
