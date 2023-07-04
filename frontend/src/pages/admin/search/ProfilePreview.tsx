import React from "react"
import iProfilePreview from "../../../interfaces/profile.component"
import { ProfilePreviewDiv } from "./styles"
import { useNavigate } from "react-router-dom"
import pfp from '../../../assets/profile-picture.svg'
import { TrashIcon, PenIcon, BanIcon } from '../../../components/Icons'

interface ProfilePreviewProps {
  id: string,
  image: string,
  name: string,
  area: string,
  pronouns: string,
  gender: string,
  onBan: React.MouseEventHandler<SVGSVGElement>,
  onEdit: React.MouseEventHandler<SVGSVGElement>,
  onDelete: React.MouseEventHandler<SVGSVGElement>

}

export function ProfilePreview({ id, image , name, area, pronouns, gender, onBan, onEdit, onDelete}: ProfilePreviewProps){
    const navigate = useNavigate()

    const splitName = name.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[splitName.length - 1]

    const names = (firstName === lastName) ? firstName : firstName + ' ' + lastName;

    return( 
    <ProfilePreviewDiv onClick={()=> navigate(`/profile/${id}`)}>
        <div className="infos-container">
            <img src={image ? image : pfp} alt={`foto de ${name}`} className="photo"/>
          <div className="middle-div">
            <p className="fullname-paragraph">{names}</p>
            <p className="area-paragraph">{area}</p>
            <p className="pronouns">{pronouns}</p>
          </div>
        </div>
        <div className='action-icons'>
          <TrashIcon className="trash-icon" onClick={onDelete} />
          <PenIcon className="pen-icon" onClick={onEdit} />
          <BanIcon className="ban-icon" onClick={onBan} />
        </div>

    </ProfilePreviewDiv>
    )
}