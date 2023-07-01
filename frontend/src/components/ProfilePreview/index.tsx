import React from "react"
import iProfilePreview from "../../interfaces/profile.component"
import { ProfilePreviewDiv } from "./styles"
import { useNavigate } from "react-router-dom"
import pfp from '../../assets/profile-picture.svg'


export function ProfilePreview({ id, image , name, area, pronouns , gender}: iProfilePreview){
    const navigate = useNavigate()

    const splitName = name.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[splitName.length - 1]

    const names = (firstName === lastName) ? firstName : firstName + ' ' + lastName;

    console.log(image)
    // 
    return( 
    <ProfilePreviewDiv onClick={()=> navigate(`/profile/${id}`)}>
        <div className="infos-container">
            <img src={image ? image : pfp} alt={"foto de " + name} className="photo"/>
          <div className="middle-div">
            <p className="fullname-paragraph">{names}</p>
            <p className="area-paragraph">Desenvolvedor Fullstack</p>
            <p className="pronouns">ele/dela</p>
          </div>
        </div>
        <p className="final-paragraph">Pessoa trans</p> 
    </ProfilePreviewDiv>
    )
}