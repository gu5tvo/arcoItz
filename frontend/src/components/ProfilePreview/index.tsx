import  ProfilePreviewDiv from './style'
import CardImage from '../../assets/images/vector.png'


interface ProfilePreviewInt{
    image: string,
    fullname: string,
    area: string,
    pronouns: string,
    gender: string
}

export function ProfilePreview({image , fullname, area, pronouns , gender}: ProfilePreviewInt){

    return(
        <ProfilePreviewDiv>
            <img src={image? image:CardImage} className="photo"/>
            <div className="middle-div">
              <p className="fullname-paragraph">{fullname}</p>
              <p className="area-paragraph">{area}</p>
              <p>{pronouns}</p>
            </div>
            <p className="final-paragraph">{gender}</p> 
        </ProfilePreviewDiv>
    )
}