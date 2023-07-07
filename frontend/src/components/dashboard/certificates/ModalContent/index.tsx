//ModalContent.tsx
import React from "react";
import { ModalContentStyle } from "./style";

export default function ModalContent() {

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUpload(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUpload = (file: File) => {
    //newDocumentComponent(file) pass the file to the function of index.tsx
  };

  return (
    <>
      <ModalContentStyle>
        <input type="file" onChange={(event) => handleUpload(event.target.files[0])} />
      </ModalContentStyle>
    </>
  );
}
