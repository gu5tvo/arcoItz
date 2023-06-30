import { CitiesContainer } from './style'
import React, { useEffect, useState } from 'react'
import DinamicHeader from '../../components/header'
import { PlusCircleOutlined } from "@ant-design/icons";
import Modal from '../../components/Modal';
import CityCard from '../../components/CityCard';
import { useAdmin } from '../../hooks/contexts';
import DeleteModal from './DeleteModal';

interface ModalOptions {
    choice: 'add' | 'delete' | null
}
export default function Cities() {

    const [modalChoice, setModalChoice] = useState<ModalOptions>({ choice: null })
    const [showModal, setShowModal] = useState(false)

    const { listCities, cities, deleteCities } = useAdmin()
    const [cityId, setCityId] = useState("")
    const [cityName, setCityName] = useState("")

    useEffect(()=>{
        listCities()
    }, [])

    const toggleModal = ()=> {
        setShowModal(!showModal)
    }

    const onDelete = async (id: string, name: string)=> {
        setCityId(id)
        setCityName(name)

        setModalChoice({ choice: 'delete' });

        toggleModal()
    }

    return (
        <>
            <DinamicHeader logoutBtn={true}/>
            <CitiesContainer>
                <h1>Cidades</h1>
                <PlusCircleOutlined className='plus-icon' onClick={()=>{}}/>
                <div className="cities">
                    {cities.map((city, index)=> {
                        return <CityCard key={index} cityName={city.name} onDelete={()=>onDelete(city.id, city.name)}/>
                    })}

                    <CityCard cityName='Imperatriz' onDelete={()=>onDelete('0', 'Itz')}/>
                    <CityCard cityName='Imperatriz' onDelete={()=>onDelete('0', 'Itz')}/>
                    <CityCard cityName='Imperatriz' onDelete={()=>onDelete('0', 'Itz')}/>
                </div>
            </CitiesContainer>
            <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                {modalChoice.choice === 'delete' && <DeleteModal cityName={cityName} cityId={cityId}/>}
            </Modal>
        </>
    )
}