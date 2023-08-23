import React, { useState } from "react";
import { ActionsWrapper, DeleteIcon, DocumentComponentStyle, DocumentDescription, DocumentDescriptionCard, DocumentName, SaveButton } from "../style/document";
import { useDocuments } from "../../../hooks/contexts";
import { DeleteModal } from "../..";
import { useModal } from "../../modal/hooks/contexts";

interface DocumentProps {
    name: string,
    description: string,
    id: string,
    document: string
}

export default function DocumentCard( { name , description, id, document }: DocumentProps){
    
    const { updateDocument, deleteDocument } = useDocuments();
    const [newDescription, setNewDescription] = useState(description);

    const { setIsModalVisible, setModalId } = useModal()

    const saveChanges = () => {
        updateDocument(id, { name, description: newDescription, id,  document });
    }

    const onDelete = () => {
        setIsModalVisible(true)
        setModalId(id)
    }

    return(
    <>
        <DocumentComponentStyle>
            <DocumentName>{name}</DocumentName>
            <DocumentDescriptionCard>

                <DocumentDescription 
                    spellCheck={ false } 
                    onChange={ (e)=>setNewDescription(e.target.value) }
                    placeholder="Descrição" 
                    defaultValue={ description }
                /> 

                <ActionsWrapper>
                    <SaveButton onClick={saveChanges}>Salvar</SaveButton>
                    <DeleteModal
                        closedModalContent={<DeleteIcon onClick={onDelete}/>}
                        elementId={id}
                        pageName="documento"
                        deleteFunc={deleteDocument}
                    />

                </ActionsWrapper>
            </DocumentDescriptionCard>
        </DocumentComponentStyle>
    </>
    )
}