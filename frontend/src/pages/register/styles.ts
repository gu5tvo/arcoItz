import styled from 'styled-components'

export const RegisterContainer = styled.div`
    padding: min(10vh, 50px) min(5vw, 30px);
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const RegisterForm = styled.form`
    background-color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    width: min(100%, 490px);
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    font-size: clamp(1em, 2vw, 1.2rem);
    gap: min(20px, 6vh);

    h2{
        font-size: 1em;
        text-align: center;
        font-weight: 600;
    }

    input{
        padding: min(1em, 10px);
        border: none;
        border-radius: 0.5rem;
        background-color: #eee;
        font-size: 0.7em;
        &:focus{
            outline: 1px solid #000;
        }
    }

    label{
        font-weight: 600;
        font-size: 0.8em;
        padding-left: 0.5rem;
    }
    button{
        border: none;
        padding: min(8px, 2vw);
        border-radius: min(8px, 2vw);
        background-color: #48A7FF;
        color: #fff;
        transition: 0.3s all ease-in-out;
        font-size: 0.9em;

        &:hover{
            cursor: pointer;
            background-color: #3F8FCC;
        }
    }

    .form-section {
        display: flex;
        flex-direction: column;
        
        gap: min(6px, 3vh);
    }

    nav {
        span {
            text-align: center;
            font-size: 0.75em;
        }
        a {
            text-decoration: none;
            color: #48A7FF;
        }
    }
`

export const ErrorText = styled.p`
    color: darkred;
    font-size: 0.8rem;
    text-align: center;
`