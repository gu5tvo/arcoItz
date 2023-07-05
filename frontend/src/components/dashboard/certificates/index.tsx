import React, { useContext, useState } from "react";
import { Label } from "../styles";
import { CertificatesScreenStyle } from "./style";
import { useDocuments } from "../../../hooks/contexts";
import { DocumentsContext } from "../../../context/documents.context";

export default function CertificatesScreen(): JSX.Element {

  const { registerDocument } = useDocuments();
  const { setModalDisplay } = useContext(DocumentsContext);
  function onRegisterDocument(){
     setModalDisplay(true);
  }

  return (
    <>
      <CertificatesScreenStyle>
         <Label>Certificações e Documentos</Label>
         <button onClick={onRegisterDocument}>
           Adicionar Certificado/Documento
         </button>
         
      </CertificatesScreenStyle>

    </>
  );
}


