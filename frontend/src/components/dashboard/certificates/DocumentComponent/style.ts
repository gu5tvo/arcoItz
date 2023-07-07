import styled from 'styled-components'

export const DocumentComponentStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: min(2vh, 10px);

    .document-name{
        font-size: clamp(0.7rem, 0.85rem, 1rem);
        background-color: #9AE7F8;
        width: 100%;
        padding: min(1vw, 10px);
        border-radius: 5px;
        font-weight: 600;
    }

    .description-div{

    }
`