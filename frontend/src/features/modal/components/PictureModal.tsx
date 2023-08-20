import React, { useState } from 'react';
import axios from 'axios';
import { useAdmin, useUser } from '../../../hooks/contexts';
import { Button, Image, ImageSection } from '../style';
import ModalTemplate from '..';
import { useModal } from '../hooks/contexts';
import DefaultPfp from '../../../assets/profile-picture.svg'


interface Props {
  avatar: string
  name: string
  source: 'admin' | 'user'
  id?: string
}
export default function PictureModal({ avatar, name, id, source }: Props): JSX.Element {
  const { isModalVisible, setIsModalVisible } = useModal()

  const { updateProfile } = useUser();
  const { adminUpdate } = useAdmin()
  const [confirmScreen, setConfirmScreen] = useState<boolean>(false);
  const [fileLocal,  setfileLocal] = useState<File>(null);  

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
        setIsModalVisible(false);

        if (source === 'admin') {
          adminUpdate(id, { avatar: res.data.secure_url });
        } else if (source === 'user') {
          updateProfile({ avatar: res.data.secure_url });
        }
      });
  };

  return (
    <>
      <ImageSection>
          <Image src={ avatar ?? DefaultPfp } alt={"foto de " + name} />
          <Button onClick={()=>setIsModalVisible(true)}>Alterar foto</Button>
      </ImageSection>
    
      { isModalVisible && <ModalTemplate handleDragOver={handleDragOver} handleDrop={handleDrop}>
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
      </ModalTemplate> }
    </>
  );
}
