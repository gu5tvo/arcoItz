import { CitiesContainer } from './style'
import React, { useState } from 'react'
import DinamicHeader from '../../components/header'
import CircumIcon from "@klarr-agency/circum-icons-react";
import Modal from '../../components/Modal';


export default function Cities() {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = ()=> {
        setShowModal(!showModal);
        console.log(showModal)
    }

    return (
        <>
            <DinamicHeader logoutBtn={true}/>
            <CitiesContainer>
                <h1>Cidades</h1>
                <CircumIcon name="circle_plus" onClick={toggleModal}/>
            </CitiesContainer>
            <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                    <h1>dasdsadsa</h1>
            </Modal>
        </>
    )
}