import styled from 'styled-components'

export const EditProfileContainer = styled.form<{small?: boolean}>`
    display: flex;
    flex-direction: column;

    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    padding: min(1rem, 3vw);
    margin-top: min(30px, 10vh);
    font-size: clamp(1rem, 2vw, 1.4rem);

    nav {
        
        max-width: 200px;
        box-sizing: border-box;
        display: inline-flex;
        margin-top: 0.5em;
        justify-content: center;

        button{
            max-width: 20%;
        }

        input{
            padding: 0.45em;
            margin: 0.5em;
            border: none;
            background-color: #eee;
            max-width: 15%;
            border-radius: 0.5rem;
            text-align: center;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
             -webkit-appearance: none;
        margin: 0;
        }       

        input[type=number] {
         appearance: textfield;
        }
    }

    img {
        width: min(150px, 90vw);
        aspect-ratio: 1;
        object-fit: cover;

        border-radius: 50%;
        transition: 0.3s all ease-in-out;
        &:hover{
            opacity: 0.8;
            scale: 1.1;
        }
    }

    input {
        all: unset;
        border: 1px solid black;
        background-color: var(--GRAY);
        
        width: clamp(200px, 60vw, 330px);
        max-width: 100%;
        box-sizing: border-box;
        padding: 10px 15px;
        font-size: clamp(0.8rem, 1.1vw, 1.8rem);
        border-radius: 10px;
    }

    p {
        font-size: 0.8em;
    }

    label{
        margin-bottom: 0.4rem;
        align-self: flex-start;
    }

    select{
        padding: 0.9rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 0.82rem;
        margin-bottom: 1rem;
        width: clamp(200px, 60vw, 330px);
    }

    .confirm-btn {
        all: unset;
        color: var(--WHITE);
        padding: min(10px, 10vw);
        background-color: var(--BLUE);
        border-radius: min(15px, 5vw);
        height: 25px;
        font-size: 0.7em;
        transition: 0.15s linear;
        cursor: pointer;
        &:hover {
            background-color: var(--BLUE-DARK);
            font-size: 0.8em;
        }
    }

    .small {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        background-color: red;
    }
    
`