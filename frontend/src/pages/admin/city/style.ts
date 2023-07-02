import styled from 'styled-components'

export const CitiesContainer = styled.main `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: min(15vh, 3rem);
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

export const CitiesSection = styled.section `
    width: 100%;
    height: 100%;
`
export const DeleteModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(20vh, 70px);
    min-height: 200px;
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