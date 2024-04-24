import React, { useEffect, useState } from 'react'
import MetadataCard from '../../../components/MetadataCard';
import { UserMetadataContainer } from '../style';
import { CreateModal , DeleteModal} from '../..';
import { iSectors } from '../../../interfaces/admin';
import AddIcon from '.././../../assets/add.svg'
import ModalTemplate from '..';

interface ModalOptions {
    choice: 'add' | 'delete' | null
}

interface UserMetadataProps {
    listMetadata:() => Promise<void>;
    Metadata: iSectors[];
    registerMetadata: (data: {name: string}) => Promise<void>;
    deleteMetadata:(id: string) => Promise<void>;
    pageName: string
}

export default function UserMetadata({ listMetadata, Metadata, registerMetadata, deleteMetadata, pageName }: UserMetadataProps) {
    
    const [modalChoice, setModalChoice] = useState<ModalOptions>({ choice: null })
    const [showModal, setShowModal] = useState(false)
    
    const [metadataId, setMetadataId] = useState("")
    
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
    
    const onDelete = (id: string) => {
        setMetadataId(id)
        setModalChoice({ choice: 'delete' });
        toggleModal()
    }

    return (
        <>
            <UserMetadataContainer>
                <h1>{pageName}</h1>
                <img className='plus-icon' src={AddIcon} onClick={onAdd} />
                <div className="cities">
                    {Metadata.map((data, index) => {
                        return <MetadataCard key={index} MetadataName={data.name} onDelete={() => onDelete(data.id)} />
                    })}
                </div>
            </UserMetadataContainer>
            <ModalTemplate id={modalChoice.choice + ''} >
            {(modalChoice.choice && modalChoice.choice === 'delete')
                    ? <DeleteModal
                        closedModalContent={<></>}
                        elementId={metadataId}
                        deleteFunc={deleteMetadata}
                        pageName={pageName} />
                    : <CreateModal
                        addFunction={registerMetadata}
                        pageName={pageName} />}
            </ModalTemplate>

        </>
    )
}