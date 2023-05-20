import  ProfilePreviewDiv from './style'

interface ProfilePreviewInt{
    image: string,
    fullname: string,
    area: string,
    pronouns: string,
    gender: string
}

export function ProfilePreview(props: ProfilePreviewInt){
    const {image , fullname, area, pronouns , gender} = props

    return(
        <>
            <ProfilePreviewDiv>
                
            </ProfilePreviewDiv>
        </>
    )
}