import styled from 'styled-components'

export const ModalWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #000;
    width: 100%;
    padding: min(30px, 8%);
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    h2 {
        font-size: clamp(0.8rem, 1vw, 1.4rem);
        font-weight: bold;
    }

    .close-icon {
        position: absolute;
        color: red;
        right: clamp(30px, 7vw, 40px);
        top: clamp(30px, 7vw, 40px);
        width: clamp(1rem, 3vw, 2rem);
        cursor: pointer;
    }
`

