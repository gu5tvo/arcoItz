import { styled } from "styled-components";


const ProfilePreviewDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    min-height: 100px;
    min-width: 540px;
    margin: 0px 0px 37px 41px;

    .photo {
        margin-left: 10px;
        min-height: 78px;
        align-self: center;
    }
    
    .middle-div {
        margin-left: 24px; 
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 68px;
    }

    .middle-div .fullname-paragraph{
        font-size: 16px;
        font-weight: bold;
    }

    .middle-div p{
        font-size: 14px;
    }

    .area-paragraph, .final-paragraph {
        font-weight: 500; 
        font-size: 14px;
    }

    .final-paragraph {
        margin: 1px 0px 0px 88px;
    }
`

export default ProfilePreviewDiv