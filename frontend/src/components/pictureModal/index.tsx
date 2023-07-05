import React, {useState} from 'react';
import axios from 'axios';
import { ModalFog, ModalContainer, ModalHeader, ModalBody } from './styles';
import { useAdmin, useModal, useUser } from '../../hooks/contexts';
import { Image } from '../dashboard/styles';

export default function PictureModal():JSX.Element{

    const { setPicture, request } = useModal()
    const { updateProfile } = useUser();
    const { adminUpdate } = useAdmin()
    const [image, setImage] = useState<string>('');
 
    const handleUpload = async (event) => {
        const preset_key = "ml_default";
        const cloud_name = "dtnsz5wcw";
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset_key);
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        .then((res)=>{
          setImage(res.data.secure_url)

          if (request.source === 'admin') {
            request.setPfp(res.data.secure_url)
            setPicture(false)
          } else if (request.source === 'user') { 
            updateProfile({avatar: res.data.secure_url}) 
          
          }
        })
      };

    return (
        <ModalFog>
            <ModalContainer>
                <ModalHeader>
                    <h3>Selecione uma foto</h3>
                    <i className='bx bx-x' onClick={()=>setPicture(false)}></i>
                </ModalHeader>
                <ModalBody>
                    <input type='file' onChange={handleUpload}/>
                    {
                      image && <div>
                        <h3>Esta é a sua nova imagem!</h3>
                        <Image  src={image} alt='preview-profile'/>
                      </div>
                    }
                </ModalBody>
            </ModalContainer>
        </ModalFog>
    )
}