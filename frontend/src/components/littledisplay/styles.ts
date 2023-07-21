import styled from "styled-components";


export const ProfilePreviewDiv = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 

    background-color: #fff;
    padding: 1em;
    border-radius: min(3vw, 1.5rem);
    width: min(500px, 90vw);
    height: 90px;;

    box-shadow: 0 0 0 rgba(0, 0, 0, 0.09);
    transition: 0.5s all ease-in-out;

    &:hover{
        cursor: pointer;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
        scale: 1.05;
    }

    .middle-div{
        display: flex;
        flex-direction: column;
        margin-left: 24px; 
        margin-right: auto;
        justify-content: space-between;
        min-height: 68px;

        h4{
            font-size: 1.2rem;
            font-weight: 600;
        }

        .fullname-paragraph{
            font-size: 16px;
            font-weight: bold;
        }

        p {
            font-size: 14px;
        }
    }

    .photo{
        max-height: 100%;
        margin-left: 10px;
        border-radius: 50%;
        align-self: center;
        aspect-ratio: 1 / 1;
    }

    small{
        font-size: 0.8rem;
    }

    .area-paragraph, .final-paragraph {
        font-weight: 500; 
        font-size: 14px;
    }
    
    .final-paragraph {
        margin: 1px 0px 0px 88px;
    }
`

/*    




*/