import React from 'react';
import { useModal } from './hooks/contexts';
import { ModalFog, ModalContainer, ModalBody, CloseIcon } from './style';

interface Props {
  children: JSX.Element | JSX.Element[] | string
  handleDrop?: (event: React.DragEvent<HTMLDivElement>) => void
  handleDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
  id: string
}

export default function ModalTemplate({ children, handleDrop, handleDragOver, id }: Props) {

  const { setIsModalVisible, isModalVisible, modalId } = useModal()

  if (!isModalVisible || modalId !== id) return <></>
  
  return (
    <ModalFog>
      <ModalContainer
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <CloseIcon onClick={() => setIsModalVisible(false)}/>
        <ModalBody>
          { children }
        </ModalBody>
      </ModalContainer>
    </ModalFog>
  );
}
