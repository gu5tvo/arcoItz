import DinamicHeader from "../../../components/header";
import React, { useEffect, useState } from 'react'
import { ManageAdminsContainer } from "./style";
import AddIcon from '../../../assets/add.svg'
import { useAdmin } from "../../../hooks/contexts";
import AdmCard from "./AdmCard";
import Modal from "../../../components/Modal";
import DeleteAdminModal from "./DeleteModal";
import EditModal from "./EditModal";
import { Navigate } from "react-router-dom";

interface ModalOptions {
    choice: 'edit' | 'delete' | null
}

interface Admin {
    name?: string;
    email?: string;
    id: string;
}

export default function ManageAdmins() {   

    const { admins, adminList, isAuthenticated } = useAdmin()

    if (!isAuthenticated) return <Navigate to="/"/>

    const [showModal, setShowModal] = useState(false)
    const [modalChoice, setModalChoice] = useState<ModalOptions>({ choice: null })
    const [adminInfos, setAdminInfos] = useState<Admin>( {id: ''} )
    const [addAdmin, setAddAdmin] = useState(false)

    useEffect(()=>{
        adminList()
    }, [])

    const toggleModal = ()=> {
        setShowModal(!showModal)

    }

    const onEdit = (name: string, id: string)=> {
        setModalChoice({ choice: 'edit'} )
        setAdminInfos({ name, id })
        toggleModal()
    }

    const onDelete = (name: string, id: string)=> {
        setAdminInfos({ name, id })

        setModalChoice({ choice: 'delete' });

        toggleModal()
    }

    const onAddAdmin = ()=> {
        setAddAdmin(true)
    }

    if (addAdmin) return <Navigate to='/admin/register'/>

    return (
        <>
            <DinamicHeader logoutBtn adminPanel/>
            <ManageAdminsContainer>
                <h1>Administradores</h1>
                <img src={AddIcon} onClick={onAddAdmin} className='plus-icon'/>
                {admins.map((admin, index)=>{
                    return <AdmCard name={admin.name} email={admin.email} key={index} onEdit={()=>onEdit(admin.name, admin.id)} onDelete={()=>onDelete(admin.name, admin.id)}/>
                })}
            </ManageAdminsContainer>
            <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                {
                    showModal &&
                    (modalChoice.choice && modalChoice.choice === 'delete') ? <DeleteAdminModal id={adminInfos.id} name={adminInfos.name}/> : <EditModal id={adminInfos.id}/>
                }
            </Modal> 
        </>
    )
}