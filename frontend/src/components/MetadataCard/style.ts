import styled from 'styled-components'

export const MetadataCardContainer = styled.div`
    width: min(90vw, 450px);
    display: grid;
    grid-template-columns: 1fr 50px;
    align-items: center;
    height: min(50px, 40vh);
    background-color: var(--WHITE);
    border-radius: min(10px, 5vw);
    padding-left: min(25px, 10vw);
    font-weight: bold;

    span {
        order: 2;
    }

    .trash-icon {
        width: min(1.2rem, 100%);
        fill: #292D32;
        color: blue;
        cursor: pointer;
        transition: 0.15s linear;
        &:hover {
            fill: red;

        }        
    }

    p {
        transition: 0.15s linear;
    }

    span:hover ~ p {
        color: red;
    }
`