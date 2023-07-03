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

    h2{
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        text-align: center;
        font-weight: 600;
    }

    input{
        padding: 1em;
        border: none;
        border-radius: 0.5rem;
        background-color: #eee;

        &:focus{
            outline: 1px solid #000;
        }
    }

    label{
        margin-top: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        font-size: 90%;
        padding-left: 0.5rem;
    }

    button{
        margin-top: 1em;
        border: none;
        padding: 1em;
        border-radius: 0.5rem;
        background-color: #48A7FF;
        color: #fff;
        transition: 0.3s all ease-in-out;
        font-size: 90%;

        &:hover{
            cursor: pointer;
            background-color: #3F8FCC;
        }
    }

    nav {
        margin-top: 1em;
        p{
        margin: .5em auto;
        text-align: center;
        }
        a{
            text-decoration: none;
            color: #48A7FF;
        }
    }
`

export const ErrorText = styled.p`
    color: darkred;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-top: 0.5rem;
    text-align: center;
`