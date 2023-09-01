import React, { useState } from 'react';
import axios from 'axios';
import { useDocuments } from '../../../hooks/contexts';
import ModalTemplate from '..';
import { useModal } from '../hooks/contexts';
import { Button, ClosedModalContent } from '../style';

export default function DocumentModal() {
	const { setIsModalVisible, setModalId } = useModal()

	const { registerDocument } = useDocuments()
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
		setIsModalVisible(false)
		registerDocument(file)
		// const preset_key = "ml_default";
		// const cloud_name = "dtnsz5wcw";
		// const formData = new FormData();
		// formData.append('file', file);
		// formData.append('upload_preset', preset_key);

		// axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, formData)
		// .then((res) => {
		// 	const data : iDocuments = {
		// 	name: file.name,
		// 	document: res.data.secure_url,
		// 	}

		// 	registerDocument(data)
		// });
	};

    const id = 'addDocument'

    const openModal = ()=> {
        setConfirmScreen(false)
        setIsModalVisible(true)
        setModalId(id)
    }

	return (
		<>
		<ClosedModalContent>
			<Button onClick={openModal} className="file-button">
			Adicionar Certificado
			</Button>
		</ClosedModalContent>

		<ModalTemplate id={id} handleDragOver={handleDragOver} handleDrop={handleDrop}>
			{!confirmScreen && 
				<>
				<label htmlFor="file">Procurar arquivo</label>
				<input type='file' onChange={(event) => {

					setfileLocal(event.target.files[0])
					setConfirmScreen(true);
					}} title=' ' id="file" />
				<p>Ou arraste um arquivo pra esta área</p>
				</>
			}
			{ 
				confirmScreen &&
				<>
				<h3>Arquivo selecionado, deseja salvar?</h3>
				<p>{fileLocal.name}</p>
				<button onClick={() => makeUpload(fileLocal)}>Salvar</button>
				</>
			}
		</ModalTemplate>
		</>
	) 
	}
