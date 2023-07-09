import React, { useEffect } from "react";
import { Label } from "../styles";
import { CertificatesScreenStyle } from "./style";
import { useDocuments, useUser } from "../../../hooks/contexts";
import DocumentComponent from "./DocumentComponent";

export default function CertificatesScreen(): JSX.Element {


  const { documents, profile } = useUser();
  const { setModalDisplay } = useDocuments();
 
  useEffect(()=>{
      profile({ documentsData: true })
  }, [])

  function displayModalDocument(){
     setModalDisplay(true);
  }

  if (!documents) return <></>
  
  return (
    <>
      <CertificatesScreenStyle>
      
        <div className="major-div">
          <Label>Certificações e Documentos</Label>
          <button onClick={displayModalDocument} className="file-button">
           Adicionar Certificado
          </button>
        </div>

        {  documents.map((document, index) => { 
              return <DocumentComponent key={index} 
              name={document.name}
              description={document.description}
              id={document.id}
              document={document.document}
          />
          })
        }
         
      </CertificatesScreenStyle>

    </>
  );
}