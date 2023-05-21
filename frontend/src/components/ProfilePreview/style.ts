import { styled } from "styled-components";


const ProfilePreviewDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    min-height: 100px;
    min-width: 540px;

    .photo {
        margin-left: 10px;
        min-height: 78px;
        align-self: center;
    }
    
    .middle-div {
        margin-left: 20px; 
        margin-right: auto;
        margin-top: 6px
    }

    .middle-div .fullname-paragraph{
        margin-top: 2px;
        font-weight: bold;
        font-size: 16px;
    }
    
    .middle-div .area-paragraph{
        margin-top: 9px;
        margin-bottom: 9px;
    }

    .middle-div p{
        font-size: 14px;
    }

    .area-paragraph, .final-paragraph {
        font-weight: medium; 
        font-size: 14px;
    }

    .final-paragraph {
        margin-top: 8px;
        margin-right: 10px;
    }
`

export default ProfilePreviewDiv