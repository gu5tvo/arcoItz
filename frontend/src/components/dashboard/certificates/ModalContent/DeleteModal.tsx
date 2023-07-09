//ModalContent.tsx
import React from "react";
import { useDocuments } from '../../../../hooks/contexts';
import { ModalContainer, ModalFog, ModalBody, ModalHeader } from "../../../CertificateModal/style";
import removeIconFormation from "../../../../assets/removeIconFormation.svg";

interface DeleteModalContentProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    id: string
}

export default function DeleteModalContent({ setShowModal, id }: DeleteModalContentProps) {
    const { deleteDocument } = useDocuments();
    const onClick = ()=> {
        deleteDocument(id)
        setShowModal(false)
    }

    return (
        <ModalFog>
        <ModalContainer>
            <ModalHeader>
            <button className='remove-button' onClick={()=>setShowModal(false)}>
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
