import { AdmCardContainer } from "./style";
import pfp from '../../../assets/profile-picture.svg'
import { PenIcon, TrashIcon } from "../../../components/Icons";
import React from 'react'

interface AdmCardProps {
    name: string;
    id?: string;
    email?: string;
    onDelete: ()=> void;
    onEdit: ()=> void;
    avatar?: string;
    phone: string;
    city: string;
}

export default function AdmCard({ name, email, onDelete, onEdit, avatar, phone, city }: AdmCardProps) {
    
    return (
    <AdmCardContainer>
        <img src={ (avatar) ? avatar : pfp} className="profile-picture"/>
        <div className="adm-infos">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{city}</p>
        </div>
        <div className="options">
            <span>
                <PenIcon className='pen-icon' onClick={onEdit} />
            </span>
            <span>
                <TrashIcon className='trash-icon' onClick={onDelete} />
            </span>
        </div>
    </AdmCardContainer>)
}