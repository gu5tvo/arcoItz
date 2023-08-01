import React, { useState } from 'react';
import axios from 'axios';
import { ModalFog, ModalContainer, ModalBody, CloseIcon } from './styles';
import { useModal, useUser } from '../../hooks/contexts';
import { Image } from './styles';
// import removeIconFormation from "../../assets/removeIconFormation.svg";
// import { GrClose } from "react-icons/gr";

export default function PictureModal(): JSX.Element {
  const { setPicture, request } = useModal();
  const { updateProfile } = useUser();
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
        setPicture(false);

        if (request.source === 'admin') {
          request.setPfp(res.data.secure_url);
        } else if (request.source === 'user') {
          updateProfile({ avatar: res.data.secure_url });
        }
      });
  };

  return (
    <ModalFog>
      <ModalContainer
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
            <CloseIcon onClick={() => setPicture(false)}/>
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
              <h3>Foto selecionada, deseja salvar?</h3>
              <Image src={URL.createObjectURL(fileLocal)} alt='preview-profile' />
              <button onClick={() => makeUpload(fileLocal)}>Salvar</button>
            </>
          }
        </ModalBody>
      </ModalContainer>
    </ModalFog>
  );
}
