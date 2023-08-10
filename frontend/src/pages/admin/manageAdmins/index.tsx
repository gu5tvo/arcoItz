import DinamicHeader from "../../../components/Header";
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
    avatar?: string;
    city?: string;
    phone?: string;
    isSuper?: boolean;
}

export default function ManageAdmins() {   

    const { admins, adminList } = useAdmin()

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

    const onEdit = (name: string, id: string, avatar: string)=> {
        setModalChoice({ choice: 'edit'} )
        setAdminInfos({ name, id, avatar })
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

    if (addAdmin) return <Navigate to='/admin/cadastro'/>

    return (
        <>
            <DinamicHeader logoutBtn adminPanel/>
            <ManageAdminsContainer>
                <h1>Administradores</h1>
                <img src={AddIcon} onClick={onAddAdmin} className='plus-icon'/>
                {admins.map((admin, index)=>{
                    return <AdmCard name={admin.name}phone={admin.phone} city={admin.city} email={admin.email} avatar={admin.avatar} key={index} onEdit={()=>onEdit(admin.name, admin.id, admin.avatar)} onDelete={()=>onDelete(admin.name, admin.id)}/>
                })}
            </ManageAdminsContainer>
            <Modal modalIsOpen={showModal} toggleModal={toggleModal}>
                {
                    showModal &&
                    (modalChoice.choice && modalChoice.choice === 'delete') ? <DeleteAdminModal id={adminInfos.id} name={adminInfos.name}/> : <EditModal avatar={adminInfos.avatar} name={adminInfos.name} id={adminInfos.id}/>
                }
            </Modal> 
        </>
    )
}