//DocumentComponent.tsx
import React, { useEffect, useState } from "react";
import { DocumentComponentStyle } from "./style";
import removeIconFormation from "../../../../assets/removeIconFormation.svg";
import { useDocuments, useUser} from "../../../../hooks/contexts";
import DeleteModalContent from "../ModalContent/DeleteModal";

interface DocumentProps {
    name: string,
    description: string,
    id: string,
    document: string
}

export default function DocumentComponent( { name , description, id, document }: DocumentProps){
    
    const { updateDocument } = useDocuments();
    const [newDescription, setNewDescription] = useState(description);
    const [showModal, setShowModal] = useState(false);

    const saveChanges = () => {
        updateDocument(id, { name, description: newDescription, id,  document });
    }

    const onDelete = () => {
        setShowModal(true)
    }

    return(
    <>
        <DocumentComponentStyle>
            <div className="document-name">
                {name}
            </div>
            <div className="description-div">

                <textarea spellCheck={false} name="" id="" onChange={(e)=>setNewDescription(e.target.value)} placeholder="Descrição" defaultValue={(description === "..." ? "" : description)}/> 

                <span>
                    <button className="salve-button" onClick={saveChanges}>Salvar</button>

                    <button onClick={onDelete} >
                    <img
                    src={removeIconFormation}
                    alt="Remove Icon Formation"
                    className="remove"
                    />
                    </button>
                </span>

            </div>


        </DocumentComponentStyle>
    { showModal && <DeleteModalContent setShowModal={setShowModal} id={id}/> }
    </>
    )
}