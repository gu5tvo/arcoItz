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