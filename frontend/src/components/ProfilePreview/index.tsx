import React from "react"
import iProfilePreview from "../../interfaces/profile.component"
import { ProfilePreviewDiv } from "./styles"
import { useNavigate } from "react-router-dom"

export function ProfilePreview({ id, image , name, area, pronouns , gender}: iProfilePreview){
    const navigate = useNavigate()
    return( 
    <ProfilePreviewDiv onClick={()=> navigate(`/profile/${id}`)}>
        <img src={image ? image : 'https://secure.gravatar.com/avatar/e0e5d1205872d84374c3e555c8a56958?s=225&d=mm&r=g'} alt={"foto de " + name} className="photo"/>
        <div className="middle-div">
            <p className="fullname-paragraph">{name}</p>
            <p className="area-paragraph">{area}</p>
            <p className="pronouns">{pronouns}</p>
        </div>
        <p className="final-paragraph">{gender}</p> 
    </ProfilePreviewDiv>
    )
}