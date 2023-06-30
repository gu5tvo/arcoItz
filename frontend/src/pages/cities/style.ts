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

    .plus-icon svg {
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
    justify-content: space-between;
    gap: min(10vh, 20px);
    min-height: 300px;
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