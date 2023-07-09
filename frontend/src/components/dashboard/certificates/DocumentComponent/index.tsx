//DocumentComponent.tsx
import React, { useEffect, useState } from "react";
import { DocumentComponentStyle } from "./style";
import removeIconFormation from "../../../../assets/removeIconFormation.svg";
import { useDocuments } from "../../../../hooks/contexts";

interface DocumentProps {
    name: string,
    description: string,
    id: string,
    document: string
}

export default function DocumentComponent( { name , description, id, document }: DocumentProps){
    
    const { updateDocument, deleteDocument, setConfirmDeletion, shouldDelete, setShouldDelete, confirmDeletion } = useDocuments()
    const [newDescription, setNewDescription] = useState(description)

    useEffect(()=> {
        const deletion = async ()=> {
            if (shouldDelete) { 
                console.log(shouldDelete)
                setShouldDelete(false)
                await deleteDocument(id) 
            }
        }

        deletion()
    }, [shouldDelete])

    const saveChanges = ()=> {
        updateDocument(id, { name, description: newDescription, id,  document })
    }

    const onDelete = ()=> {
        setConfirmDeletion(!confirmDeletion)
    }

    return(
    <>
        <DocumentComponentStyle>
            <div className="document-name">
                {name}
            </div>
            <div className="description-div">

                <textarea name="" id="" onChange={(e)=>setNewDescription(e.target.value)} placeholder="Descrição" defaultValue={(description === "..." ? "" : description)}/> 

                <button className="salve-button" onClick={saveChanges}>Salvar</button>

                <button onClick={onDelete} >
                 <img
                   src={removeIconFormation}
                   alt="Remove Icon Formation"
                   className="remove"
                 />
                </button>

            </div>

        </DocumentComponentStyle>
        
    </>
    )
}