import styled from "styled-components";


export const ProfilePreviewDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    padding: 1em;
    border-radius: 0.5rem;
    width: 420px;
    height: 80px;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.09);
    transition: 0.5s all ease-in-out;

    &:hover{
        cursor: pointer;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
        scale: 1.05;
    }

    .main-box{
        display: flex;
        flex-direction: row;
        h4{
            font-size: 1.2rem;
            font-weight: 600;
        }

        p{
            margin-top: 0.5em;
        }

        img{
            width: 80px;
            margin-right: 1em;
            border-radius: 50%;
        }
    }

    small{
        font-size: 0.8rem;
    }

`