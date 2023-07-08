import React, { useState } from 'react';
import axios from 'axios';
import { ModalFog, ModalContainer, ModalHeader, ModalBody } from './style';
import { useAdmin, useDocuments, useModal, useUser } from '../../hooks/contexts';

import removeIconFormation from "../../assets/removeIconFormation.svg";
import { v4 as uuidv4 } from 'uuid';
import { iDocuments } from "../../../../frontend/src/interfaces/users";

export default function PictureModal(): JSX.Element {
  const { setModalDisplay, registerDocument  } = useDocuments();
  const [confirmScreen, setConfirmScreen] = useState<boolean>(false);
  const [fileLocal ,  setfileLocal] = useState<File>(null);  


  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setfileLocal(event.dataTransfer.files[0]);
    setConfirmScreen(true);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const makeUpload = async (file: File) => {
    const preset_key = "ml_default";
    const cloud_name = "dtnsz5wcw";
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then((res) => {

        const data : iDocuments = {
          id: uuidv4(),
          name: file.name,
          description: "...",
          document: res.data.secure_url,
        }
        
        registerDocument(data)
      });
  };

  return (
    <ModalFog>
      <ModalContainer
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <ModalHeader>
          <button className='remove-button' onClick={() => setModalDisplay(false)}>
            <img
              src={removeIconFormation}
              alt="Remove Icon Formation"
              className="remove"
            />
          </button>
        </ModalHeader>
        <ModalBody>
          {!confirmScreen && 
            <>
              <label htmlFor="file">Procurar arquivo</label>
              <input type='file' onChange={(event) => {

                setfileLocal(event.target.files[0])
                setConfirmScreen(true);
                }} title=' ' id="file" />
              <text>Ou arraste um arquivo pra esta área</text>
            </>
          }
          { 
            confirmScreen &&
            <>
              <h3>Arquivo selecionado, deseja salvar?</h3>
              <text>{fileLocal.name}</text>
              <button onClick={() => makeUpload(fileLocal)}>Salvar</button>
            </>
          }
        </ModalBody>
      </ModalContainer>
    </ModalFog>
  );
}
