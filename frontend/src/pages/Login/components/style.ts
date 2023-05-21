import styled from 'styled-components'

export const CheckboxElement = styled.input.attrs({ type: 'checkbox' })`
        appearance: none;
        position: absolute;
        border-radius: 20%;
        position: absolute;
        margin: 0;
        left: clamp(-30px, -1.5vw, -20px);
        top: 50%;
        transform: translateY(-50%);
        height: clamp(0.8rem, 1vw, 1.5rem);
        width: clamp(0.8rem, 1vw, 1.5rem);
        

        background-color: #D9D9D9;
        cursor: pointer;
        transition: 0.15s;

    &:hover {
        background-color: #c9c9c9;
    }

    &:checked {
        background-color: #48A7FF;
    }

    &:checked::before {
        margin: 0;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -60%) rotate(45deg);
        width: 20%;
        height: 40%;
        border: solid white;
        border-width: 0 3px 3px 0;
    }

`

export const InputAreaContainer = styled.div`
    margin: 15px 0;

    h2 {
        font-weight: bold;
    }
`
export const ButtonElement = styled.button`
    color: #fff;
    background-color: #48A7FF;
    min-height: 40px;
    text-align: center;
    width: clamp(200px, 60vw, 330px);
    max-width: 100%;
    margin: 5px 0;
    padding: 10px 15px;
    font-size: clamp(0.8rem, 1.1vw, 1.8rem);
    border-radius: 10px;
`

export const ModalWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: min(30px, 8%);
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
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