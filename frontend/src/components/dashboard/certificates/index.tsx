import React, { useContext, useState } from "react";
import { IconsDivStyle, Label } from "../styles";
import { CertificatesScreenStyle } from "./style";
import { useDocuments } from "../../../hooks/contexts";
import { DocumentsContext } from "../../../context/documents.context";
import DocumentComponent from "./DocumentComponent";


export default function CertificatesScreen(): JSX.Element {

  const [documentComponentNumber, setDocumentComponentNumber] = useState(1);
  const { setModalDisplay } = useContext(DocumentsContext);
 
  function newDocumentComponent(file){
    // update the graduationComponents with a new DocumentComponent that include the file
  }

  function displayModalDocument(){
     setModalDisplay(true);//just make a modal with the ModalContent.tsx body 
  }

  const graduationComponents = Array.from({ length: documentComponentNumber }, (_, index) => (
    <DocumentComponent key={index} />
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