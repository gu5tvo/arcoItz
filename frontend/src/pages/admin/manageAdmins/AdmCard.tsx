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
}

export default function AdmCard({ name, email, onDelete, onEdit }: AdmCardProps) {

    return (
    <AdmCardContainer>
        <img src={pfp} className="profile-picture"/>
        <div className="adm-infos">
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
        <div className="options">
            <span onClick={onEdit}>
                <PenIcon className='pen-icon' />
            </span>
            <span onClick={onDelete}>
                <TrashIcon className='trash-icon' />
            </span>
        </div>
    </AdmCardContainer>)
}