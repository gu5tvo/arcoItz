import styled from 'styled-components'

export const CitiesContainer = styled.main `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: min(1.5rem, 10vh);

    h1 {
        font-size: clamp(1.1rem, 3vw, 1.4rem);
        font-weight: bold;
    }

    .circumicon__circle_plus {
        aspect-ratio: 1 / 1;
        width: min(10vw, 100px);
        height: min(10vw, 100px);
        cursor: pointer;
    }

`

// https://github.com/Klarr-Agency/Circum-icons

export const CitiesSection = styled.section `
    width: 100%;
    height: 100%;
`