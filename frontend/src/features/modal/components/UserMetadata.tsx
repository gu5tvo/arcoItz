import React, { useEffect, useState } from 'react'
import MetadataCard from '../../../components/MetadataCard';
import { UserMetadataContainer } from '../style';
import Modal from '../../../components/Modal';
import { CreateModal , DeleteModal} from '../..';
import { iSectors } from '../../../interfaces/admin';
import AddIcon from '.././../../assets/add.svg'

interface ModalOptions {
    choice: 'add' | 'delete' | null
}

interface UserMetadataProps {
    listMetadata:() => Promise<void>;
    Metadata: iSectors[];
    registerMetadata: (data: {name: string}) => Promise<void>;
    deleteMetadata:(id: string) => Promise<void>;
}

export default function UserMetadata({ listMetadata, Metadata , registerMetadata, deleteMetadata }: UserMetadataProps) {
    
    const [modalChoice, setModalChoice] = useState<ModalOptions>({ choice: null })
    const [showModal, setShowModal] = useState(false)
    
    const [metadataId, setMetadataId] = useState("")
    const [metadataName, setMetadataName] = useState("")
    
    useEffect(() => {
        listMetadata()
    }, [])
    
    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    const onAdd = () => {
        setModalChoice({ choice: 'add' })
        toggleModal()
    }
    
    const onDelete = (id: string, name: string) => {
        setMetadataId(id)
        setMetadataName(name)
        setModalChoice({ choice: 'delete' });
        toggleModal()
    }

    return (
        <>
            <UserMetadataContainer>
                <h1>Setores</h1>
                <img className='plus-icon' src={AddIcon} onClick={onAdd} />
                <div className="cities">
                    {Metadata.map((data, index) => {
                        return <MetadataCard key={index} MetadataName={data.name} onDelete={() => onDelete(data.id, data.name)} />
                    })}
                </div>
            </UserMetadataContainer>
            <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                {
                    showModal &&
                        (modalChoice.choice && modalChoice.choice === 'delete')
                        ? <DeleteModal
                            elementName={metadataName}
                            elementId={metadataId}
                            remove={deleteMetadata}
                            pageName={"Setor"} />
                        : <CreateModal
                            addFunction={registerMetadata}
                            pageName={"Setor"} />
                }
            </Modal>

        </>
    )
}