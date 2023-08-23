import React from 'react'
import ModalTemplate from '..';
import { useModal } from '../hooks/contexts';
import { ClosedModalContent } from '../style';

interface DeleteCityModalProps {
    elementId: string;
    pageName: string;
    deleteFunc: (id: string) => Promise<void>;
    closedModalContent: JSX.Element | JSX.Element[] | string
}

export default function DeleteElementModal(
    { pageName, elementId, deleteFunc, closedModalContent }: DeleteCityModalProps) {

    const { setIsModalVisible } = useModal()

    const deleteElement = () => {
        deleteFunc(elementId);
        setIsModalVisible(false)
    }

    return (
        <>
            <ClosedModalContent>
                {closedModalContent}
            </ClosedModalContent>

            <ModalTemplate id={elementId}>
                <button className="confirm-btn" onClick={deleteElement}>Excluir {pageName}</button>
            </ModalTemplate>

        </>
    )
}