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
    width: min(30vw, 450px);
    height: 70px;
    gap: min(1rem, 10%);

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
        justify-content: space-between;
        min-height: 68px;
        min-width: 33%;

        h4{
            font-size: clamp(1rem, 3vw, 1.2rem);
            font-weight: 600;
        }

        .fullname-paragraph{
            font-size: clamp(0.8rem, 2vw, 1rem);
            font-weight: bold;
        }

        p {
            font-size: clamp(0.6rem, 2vw, 0.8rem);
        }

        .pronouns {

        }
    }

    .photo{
        max-height: 100%;
        margin-left: 10px;
        border-radius: 50%;
        align-self: center;
        aspect-ratio: 1 / 1;
    }

    small {
        font-size: 0.8rem;
    }

    .area-paragraph, .final-paragraph {
        font-weight: 500; 
        font-size: 14px;
        align-self: flex-start;
    }
`