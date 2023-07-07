import React from "react";
import { ModalContentStyle } from "./style";
import { useDocuments } from "../../../../hooks/contexts";
import { iDocuments } from "../../../../interfaces/users";

export default function ModalContent() {
  const { registerDocument } = useDocuments();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUpload(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUpload = async (file: File) => {
    const document: iDocuments = {
      id: "someId",
      name: file.name,
      description: "someDescription",
      document: file.name,
    };
    registerDocument(document);
  };

  return (
    <>
      <ModalContentStyle>
        <input type="file" onChange={(event) => handleUpload(event.target.files[0])} />
      </ModalContentStyle>
    </>
  );
}
