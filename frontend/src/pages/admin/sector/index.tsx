import { CitiesContainer } from './style'
import React, { useEffect, useState } from 'react'
import DinamicHeader from '../../../components/Header'
import Modal from '../../../components/Modal';
import CityCard from '../../../components/CityCard';
import { useAdmin } from '../../../hooks/contexts';


import AddIcon from '.././../../assets/add.svg'
import CreateModal from '../../../features/modal/components/CreateModal';
import DeleteModal from '../../../features/modal/components/DeleteModal';

interface ModalOptions {
    choice: 'add' | 'delete' | null
}
export default function SectorPage() {

    const { listSectors, sectors , registerSectors , deleteSectors } = useAdmin();

    const [modalChoice, setModalChoice] = useState<ModalOptions>({ choice: null })
    const [showModal, setShowModal] = useState(false)

    const [sectorId, setSectorId] = useState("")
    const [sectorName, setSectorName] = useState("")

    useEffect(()=>{
        listSectors()
    }, [])

    const toggleModal = ()=> {
        setShowModal(!showModal)

    }

    const onAdd = ()=> {
        setModalChoice({ choice: 'add'} )
        toggleModal()
    }

    const onDelete = (id: string, name: string)=> {
        setSectorId(id)
        setSectorName(name)

        setModalChoice({ choice: 'delete' });

        toggleModal()
    }

    return (
        <>
         <DinamicHeader logoutBtn adminPanel/>
             <CitiesContainer>
                <h1>Setores</h1>
                <img className='plus-icon' src={AddIcon} onClick={onAdd}/>
                <div className="cities">
                    {sectors.map((city, index)=> {
                        return <CityCard key={index} cityName={city.name} onDelete={()=>onDelete(city.id, city.name)}/>
                    })}
                </div>
            </CitiesContainer>
            <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                {
                    showModal &&
                    (modalChoice.choice && modalChoice.choice === 'delete') 
                    ? <DeleteModal 
                        elementName={sectorName} 
                        elementId={sectorId}
                        remove={deleteSectors} 
                        pageName={"Setor"}/> 
                    : <CreateModal 
                        addFunction={registerSectors}  
                        pageName={"Setor"}/>
                }
            </Modal> 

        </>
        )
}