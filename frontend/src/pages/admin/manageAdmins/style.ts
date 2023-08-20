import styled from 'styled-components'

export const ManageAdminsContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: min(15vh, 3rem) 0;
    gap: min(1.5rem, 10vh);

    h1 {
        font-size: clamp(1.1rem, 3vw, 1.4rem);
        font-weight: bold;
    }

    .plus-icon {
        --size: min(80vw, 80px);
        aspect-ratio: 1;
        width: var(--size);
        height: var(--size);
        cursor: pointer;
    }

    .cities {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: min(5vh, 20px);
    }
`

export const AdmCardContainer = styled.div`
    width: min(400px, 90vw);
    min-height: 40px;
    background-color: var(--WHITE);
    
    display: grid;
    grid-template-columns: 20% 1fr 20%;
    padding: min(20px, 5vw);
    font-size: min(1rem, 3vw, 1.2rem);
    border-radius: min(20px, 5vw);
    box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.25);
    gap: min(10px, 3vw);
    
    h1 {
        font-size: 1em;
    }

    p {
        font-size: 0.8em;
    }
    .profile-picture {
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        object-fit: cover;
    }

    .adm-infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: min(10%, 10px);
    }

    span {
        width: 30%;
        height: 30%;
    }

    .options {
        display: flex;
        flex-direction: column;   
        align-items: center;
        justify-content: space-evenly;
    }

    .trash-icon,
    .pen-icon {
        width: 100%;
        height: 100%;
        fill: var(--BLACK);
        transition: 0.15 linear;
        cursor: pointer;
    }

    .trash-icon:hover,
    .pen-icon:hover {
        width: 110%;
        height: 110%;
    }

    .trash-icon:hover {
        fill: red;
    }

    .pen-icon:hover {
        fill: blue;
    }
`

export const DeleteModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(10vh, 70px);
    min-height: 100px;
    padding: min(1rem, 3vw);
    max-width: 90%;
    font-size: clamp(1.2rem, 3vw, 1.6rem);

    h1 {
        font-size: 1em;
        font-weight: bold;
    }

    p {
        font-size: 0.8em;
    }

    .confirm-btn {
        all: unset;
        color: var(--WHITE);
        padding: min(10px, 10vw);
        background-color: var(--BLUE);
        border-radius: min(15px, 5vw);
        height: 25px;
        font-size: 0.7em;
        align-self: flex-end;
        transition: 0.15s linear;
        cursor: pointer;
        &:hover {
            background-color: var(--BLUE-DARK);
            font-size: 0.8em;
        }
    }
`

export const CreateModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(10vh, 50px);
    min-height: 200px;
    padding: min(1rem, 3vw);
    max-width: 90%;
    font-size: clamp(1.2rem, 3vw, 1.6rem);

    h1 {
        font-size: 1em;
        font-weight: bold;
    }

    input {
        all: unset;
        border: 1px solid black;
        background-color: var(--GRAY);
        min-height: 40px;
        width: clamp(200px, 60vw, 330px);
        max-width: 100%;
        box-sizing: border-box;
        padding: 10px 15px;
        font-size: clamp(0.8rem, 1.1vw, 1.8rem);
        border-radius: 10px;
    }

    p {
        font-size: 0.8em;
    }

    .confirm-btn {
        all: unset;
        color: var(--WHITE);
        padding: min(10px, 10vw);
        background-color: var(--BLUE);
        border-radius: min(15px, 5vw);
        height: 25px;
        font-size: 0.7em;
        align-self: flex-end;
        transition: 0.15s linear;
        cursor: pointer;
        &:hover {
            background-color: var(--BLUE-DARK);
            font-size: 0.8em;
        }
    }
    
`

export const EditModalContainer = styled.form<{small?: boolean}>`
    display: flex;
    flex-direction: column;

    gap: 20px;
    justify-content: ${props => props.small ? 'center' : 'auto'};
    align-items: center;
    min-height: ${props => props.small ? '100px' : '450px'};
    width: min(500px, 90vw);
    
    padding: min(1rem, 3vw);
    overflow-y: auto;
    font-size: clamp(1rem, 2vw, 1.4rem);

    nav{
        max-width: 200px;
        box-sizing: border-box;
        display: inline-flex;
        margin-top: 0.5em;
        justify-content: center;

        button{
            margin: 0.5em;
            max-width: 20%;
        }

        input{
            padding: 0.45em;
            margin: 0.5em;
            border: none;
            background-color: #eee;
            max-width: 15%;
            border-radius: 0.5rem;
            text-align: center;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
             -webkit-appearance: none;
        margin: 0;
        }       

        input[type=number] {
         appearance: textfield;
        }
    }

    img {
        width: 30%;
        aspect-ratio: 1;
        object-fit: cover;

        border-radius: 50%;
        transition: 0.3s all ease-in-out;
        &:hover{
            opacity: 0.8;
            scale: 1.1;
        }
    }

    h1 {
        font-size: 0.8em;
        font-weight: bold;
    }

    input {
        all: unset;
        border: 1px solid black;
        background-color: var(--GRAY);
        
        width: clamp(200px, 60vw, 330px);
        max-width: 100%;
        box-sizing: border-box;
        padding: 10px 15px;
        font-size: clamp(0.8rem, 1.1vw, 1.8rem);
        border-radius: 10px;
    }

    p {
        font-size: 0.8em;
    }

    label{
        margin-bottom: 0.4rem;
        align-self: flex-start;
    }

    select{
        padding: 0.9rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 0.82rem;
        margin-bottom: 1rem;
        width: 70%;
    }

    .confirm-btn {
        all: unset;
        color: var(--WHITE);
        padding: min(10px, 10vw);
        background-color: var(--BLUE);
        border-radius: min(15px, 5vw);
        height: 25px;
        font-size: 0.7em;
        align-self: flex-end;
        transition: 0.15s linear;
        cursor: pointer;
        &:hover {
            background-color: var(--BLUE-DARK);
            font-size: 0.8em;
        }
    }

    .small {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        background-color: red;
    }
    
`