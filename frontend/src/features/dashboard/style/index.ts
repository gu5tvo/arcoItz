import styled from 'styled-components'

// --------- Contêineres ---------
export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100vw;
    flex-wrap: wrap;
    gap: min(30px, 5vh);
    padding-top: min(2rem, 10vh);
`

export const RightContainer = styled.div`
    width: min(90vw, 800px);
    height: fit-content;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
`

export const DisplayContainer = styled.main`
    background-color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    height: fit-content;
    
    gap: min(4vh, 16px);
`

export const GenericContentStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: min(4vw, 20px);
    align-items: center;
`

export const FormStyle = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    width: 80%;
`

export const InputArea = styled.span`
    display: flex;
    flex-direction: column;
    gap: min(2vh, 8px);
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;

    transition: 0.3s all ease-in-out;
    aspect-ratio: 1;
    &:hover{
        opacity: 0.8;
        scale: 1.1;
    }

    @media (min-width: 768px){
        max-width: 200px;
        max-height: 200px;
    }
`

export const Label = styled.label`
    font-size: 0.9rem;
`

export const Input = styled.input`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;

    &:focus{
        outline: none;
        background-color: #9AE7F8;
        color: #001C22;
    }
`

export const TextArea = styled.textarea`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;
    resize: none;
    min-height: miN(70px, 10vh);
    &:focus{
        outline: none;
        background-color: #9AE7F8;
        color: #001C22;
    }
`

export const Button = styled.button`

    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #48A7FF;
    color: #fff;
    transition: 0.3s all ease-in-out;
    width: min(270px, 100%);
    align-self: center;

    &:hover{
        cursor: pointer;
        background-color: #3F8FCC;
    }
`

export const ErrorText = styled.small`
    color: darkred;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    text-align: center;
`

export const Select = styled.select`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;

    &:focus{
        outline: none;
        cursor: pointer;
        background-color: #9AE7F8;
        color: #001C22;
    }
`
