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
    font-size: min(1rem, 2vw, 1.2rem);
    border-radius: min(20px, 5vw);
    box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.25);
    
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
    }

    .adm-infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: min(20%, 20px);
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