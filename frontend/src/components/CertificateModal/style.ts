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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
`

export const ModalHeader = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .remove-button{
      align-self: end;
      margin: 0;
      padding: 0;
      background-color: transparent;
      border: none;
    }

    img.remove {
      transform: rotate(45deg);
      transition: transform 0.5s;


      &:hover {
        transform: rotate(-135deg);
      }
    }
`

export const ModalBody = styled.div`

    padding-left: min(4vw, 100px);
    padding-right: min(4vw, 100px);
    padding-bottom: min(5vh, 100px);
    padding-top: 0rem ;
    margin-top: 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .9rem;



    p{
        font-size: 1.2rem;
    }

    input[type="file"] {
    display: none;
    }
    
    label{
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: #9AE7F8;
        border-radius: 1.25rem;
        width: 70%;
        padding-top: 3%;
        padding-bottom: 2.5%;


        cursor: pointer;
        transition: 0.4s;

        &:hover{
            background-color: #059ABB;
            color: white;
        }
    }

    button{
        width: 30%;
        padding-top: 3%;
        padding-bottom: 3%;
        font-weight: 600;
        border-radius: 0.625rem;
        background-color: #48A7FF;
        color: white;
        border: none;
        transition: 0.5s;

        &:hover{
            background-color: #3F8FCC;
        }
    }
    
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

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    aspect-ratio: 1;


    @media (min-width: 768px){
        max-width: 150px;
        max-height: 150px;
    }
`