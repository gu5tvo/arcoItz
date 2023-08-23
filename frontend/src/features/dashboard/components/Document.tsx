import React, { useEffect } from "react";

import { useUser } from "../../../hooks/contexts";
import { GenericContentStyle } from "../style";
import DocumentModal from "../../modal/components/DocumentModal";
import DocumentCard from "./DocumentCard";

export default function CertificatesScreen(): JSX.Element {


  const { documents, profile } = useUser();
 
  useEffect(()=>{
      profile({ documentsData: true })
  }, [])
    
  return (
    <>
      <GenericContentStyle>
      
        <DocumentModal/>

        {  documents?.map((document, index) => { 
              return <DocumentCard key={index} 
              name={document.name}
              description={document.description}
              id={document.id}
              document={document.document}
          />
          })
        }
         
      </GenericContentStyle>

    </>
  );
}