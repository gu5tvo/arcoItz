//ModalContent.tsx
import React from "react";
import { useDocuments } from '../../../../hooks/contexts';
import { ModalContainer, ModalFog, ModalBody, ModalHeader } from "../../../CertificateModal/style";
import removeIconFormation from "../../../../assets/removeIconFormation.svg";

export default function DeleteModalContent() {
    const { setConfirmDeletion,  setShouldDelete } = useDocuments();
  
    const onClick = ()=> {
        setConfirmDeletion(false)
        setShouldDelete(true)
        console.log("bashdbsahd")
    }
    return (
        <ModalFog>
        <ModalContainer>
            <ModalHeader>
            <button className='remove-button' onClick={() => setConfirmDeletion(false)}>
                <img
                src={removeIconFormation}
                alt="Remove Icon Formation"
                className="remove"
                />
            </button>
            </ModalHeader>
            <ModalBody>
                <button className="remove-button" onClick={onClick}>Excluir documento</button>
            </ModalBody>
        </ModalContainer>
      </ModalFog>
    );
}
