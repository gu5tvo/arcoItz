import styled from 'styled-components'

export const CityCardContainer = styled.div`
    width: min(90vw, 450px);
    display: grid;
    grid-template-columns: 1fr 50px;
    align-items: center;
    height: min(50px, 40vh);
    background-color: var(--WHITE);
    border-radius: min(10px, 5vw);
    padding-left: min(25px, 10vw);
    font-weight: bold;

    .trash-icon {
        cursor: pointer;
        transition: 0.15s linear;
        order: 2;
        &:hover {
            color: red;
        }        
    }

    p {
        transition: 0.15s linear;
    }

    .trash-icon:hover ~ p {
        color: red;
    }
`