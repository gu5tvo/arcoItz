import React, { useContext, useState } from "react";
import { IconsDivStyle, Label } from "../styles";
import { CertificatesScreenStyle } from "./style";
import { useDocuments } from "../../../hooks/contexts";
import { DocumentsContext } from "../../../context/documents.context";
import DocumentComponent from "./DocumentComponent";

export default function CertificatesScreen(): JSX.Element {


  const { setModalDisplay } = useContext(DocumentsContext);
  function onRegisterDocument(){
     setModalDisplay(true);
  }

  return (
    <>
      <CertificatesScreenStyle>
      
        <div className="major-div">
          <Label>Certificações e Documentos</Label>
          <button onClick={onRegisterDocument} className="file-button">
           Adicionar Certificado
          </button>
        </div>

         
         
         <DocumentComponent/>
         <DocumentComponent/>
      </CertificatesScreenStyle>

    </>
  );
}


