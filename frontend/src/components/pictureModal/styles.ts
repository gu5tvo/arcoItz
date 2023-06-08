import styled from 'styled-components';

export const ModalFog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    background-color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h3{
        margin: 0;
        font-size: 1.5rem;
    }

    i{
        color: #000;
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const ModalBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
`

export const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    flex-direction: column;

    h3{
        padding: 1em;
        width: 60%;
        color: darkgreen;
        background-color: #a2fa96;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid #549e4a;
    }

`