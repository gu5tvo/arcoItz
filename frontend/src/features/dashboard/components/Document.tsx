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
              const { id , name , description , document : content} = document ;
              
              return <DocumentCard key={index} 
              name={name}
              description={description}
              id={id}
              document={content}
          />
          })
        }
         
      </GenericContentStyle>

    </>
  );
}