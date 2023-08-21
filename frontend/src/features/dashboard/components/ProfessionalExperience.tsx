import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks/contexts";
import { GenericContentStyle } from '../style';
import ManageFieldsQuantity from './ManageFieldsQuantity';
import Work from "./Work";

export default function ProfessionalExperience() {
  const [experienceNumber, setExperienceNumber] = useState(1);
  const { experiences, profile } = useUser();

  const decrementExperienceNumber = ()=>setExperienceNumber((cur)=> cur > 1 ? cur - 1 : 1);
  const incrementExperienceNumber = ()=>setExperienceNumber((cur)=> cur + 1)

  useEffect(() => {
    profile({ experiencesData: true });
  }, []);

  const graduationComponents = Array.from(
    { length: experienceNumber },
    (_, index) => <Work key={index} />
  );
  return (
    <>
      <GenericContentStyle>
        <div>
          {experiences?.map((experience, index) => {
            return (
              <Work
                key={index}
                company={experience.company}
                description={experience.description}
                doesExist
                from={experience.from}
                to={experience.to}
                id={experience.id}
                location={experience.location}
                title={experience.title}
              />
            );
          })}

          {graduationComponents}
        </div>
        
        <ManageFieldsQuantity decrementQuantity={decrementExperienceNumber} incrementQuantity={incrementExperienceNumber} type="experiência"/>
      </GenericContentStyle>
    </>
  );
}
