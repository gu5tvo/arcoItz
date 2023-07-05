import { CitiesContainer } from './style'
import React, { useEffect, useState } from 'react'
import DinamicHeader from '../../../components/header'
import Modal from '../../../components/Modal';
import CityCard from '../../../components/CityCard';
import { useAdmin } from '../../../hooks/contexts';
import DeleteCityModal from './DeleteModal';
import CreateModal from './CreateModal';
import AddIcon from '.././../../assets/add.svg'
import { Navigate } from "react-router-dom";

interface ModalOptions {
    choice: 'add' | 'delete' | null
}
export default function Cities() {

    const { listCities, cities } = useAdmin()

    const [modalChoice, setModalChoice] = useState<ModalOptions>({ choice: null })
    const [showModal, setShowModal] = useState(false)

    const [cityId, setCityId] = useState("")
    const [cityName, setCityName] = useState("")

    useEffect(()=>{
        listCities()
    }, [])

    const toggleModal = ()=> {
        setShowModal(!showModal)

    }

    const onAdd = ()=> {
        setModalChoice({ choice: 'add'} )
        toggleModal()
    }

    const onDelete = (id: string, name: string)=> {
        setCityId(id)
        setCityName(name)

        setModalChoice({ choice: 'delete' });

        toggleModal()
    }

    return (
        <>
         <DinamicHeader logoutBtn adminPanel/>
             <CitiesContainer>
                <h1>Cidades</h1>
                <img className='plus-icon' src={AddIcon} onClick={onAdd}/>
                <div className="cities">
                    {cities.map((city, index)=> {
                        return <CityCard key={index} cityName={city.name} onDelete={()=>onDelete(city.id, city.name)}/>
                    })}
                </div>
            </CitiesContainer>
            <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                {
                    showModal &&
                    (modalChoice.choice && modalChoice.choice === 'delete') ? <DeleteCityModal cityName={cityName} cityId={cityId}/> : <CreateModal/>
                }
            </Modal> 

        </>
        )
}