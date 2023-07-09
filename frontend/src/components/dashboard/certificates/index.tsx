import React from "react";
import { Label } from "../styles";
import { CertificatesScreenStyle } from "./style";
import { useDocuments, useUser } from "../../../hooks/contexts";
import DocumentComponent from "./DocumentComponent";

export default function CertificatesScreen(): JSX.Element {


  const { documents } = useUser();
  const { setModalDisplay } = useDocuments();
 
  function displayModalDocument(){
     setModalDisplay(true);
  }

  const graduationComponents = Array.from({ length: documents.length }, (_, index) => (
    <DocumentComponent key={index} 
    name={documents[index].name}
    description={documents[index].description}
     />
  ));

  return (
    <>
      <CertificatesScreenStyle>
      
        <div className="major-div">
          <Label>Certificações e Documentos</Label>
          <button onClick={displayModalDocument} className="file-button">
           Adicionar Certificado
          </button>
        </div>

        {graduationComponents}
         
      </CertificatesScreenStyle>

    </>
  );
}