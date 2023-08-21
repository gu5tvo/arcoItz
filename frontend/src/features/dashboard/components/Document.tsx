import React, { useEffect } from "react";

import { useUser } from "../../../hooks/contexts";
import DocumentComponent from "../../../components/dashboard/certificates/DocumentComponent";
import { GenericContentStyle } from "../style";
import DocumentModal from "../../modal/components/DocumentModal";

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
              return <DocumentComponent key={index} 
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