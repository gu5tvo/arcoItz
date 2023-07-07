//ModalContent.tsx
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from "react";
import { ModalContentStyle } from "./style";
import { iDocuments } from "../../../../interfaces/users";
import { DocumentsContext } from "../../../../context/documents.context";

export default function ModalContent() {
  const { registerDocument } = useContext(DocumentsContext);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUpload(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUpload = async (file: File) => {
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
          description: "",
          document: res.data.secure_url,
        }

        console.log(data);
        
        registerDocument(data)
      });
  };
  

  return (
    <>
      <ModalContentStyle>
        <input type="file" onChange={(event) => handleUpload(event.target.files[0])} />
      </ModalContentStyle>
    </>
  );
}
