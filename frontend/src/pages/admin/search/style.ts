import styled from 'styled-components';

export const SearchContainer = styled.main`
    margin-top: min(5vh, 30px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    flex-wrap: wrap;
    gap: min(2vw, 2rem);

    @media (width > 1500px) {
        gap: 20px;
    }

`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 2em;
    min-width: 19vw;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    height: fit-content;
    font-size: 1rem;

    label{
        margin-bottom: 0.4rem;
        align-self: flex-start;
    }

    .label-pagina{
        margin-top: 0.8rem;
        margin-bottom: 0;
    }

    h3{
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
        text-align: center;
        font-weight: 700;
    }

    select{
        padding: 0.9rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 0.82rem;
        margin-bottom: 1rem;
        width: 100%;
    }

    button{
        margin-top: 1em;
        border: none;
        padding: 1em;
        border-radius: 0.5rem;
        background-color: #48A7FF;
        color: #fff;
        transition: 0.3s all ease-in-out;
        width: 100%;

        &:hover{
            cursor: pointer;
            background-color: #3F8FCC;
        }
    }

    nav{
        max-width: 200px;
        box-sizing: border-box;
        display: inline-flex;
        margin-top: 0.5em;
        justify-content: center;

        button{
            margin: 0.5em;
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

    * {
        box-sizing: border-box;
    }
    .filter-input {
        all: unset;
        box-sizing: border-box;
        background-color: var(--GRAY);
        box-shadow: 0px 0px 1px black;
        border-radius: min(2vw, 10px);
        padding: min(5px, 1vw) min(10px, 2vw);
        width: 100%;
        font-size: 0.9em;
    }

    .filter-input:first-of-type {
        margin-bottom: min(10px, 2vh);
    }
`;

export const SearchView = styled.section`
    width: min(70vw, 1700px);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2vw;

    @media (width < 800px) {
        gap: 7vh;
    }

    @media (width > 1400px) {
        gap: 3.5vw;
    }

`;

export const ProfilePreviewDiv = styled.div`

    box-sizing: content-box;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 

    background-color: #fff;
    padding: 1em;
    border-radius: min(3vw, 1.5rem);
    width: min(90vw, 450px);
    height: 70px;
    gap: min(1rem, 10%);

    box-shadow: 0 0 0 rgba(0, 0, 0, 0.09);
    transition: 0.5s all ease-in-out;
    font-size: clamp(0.6rem, 1vw, 0.8rem);

    @media (width < 1400px) {
        width: min(90vw, 360px);
        font-size: clamp(0.5rem, 0.9vw, 0.0.7rem);
    }


    &:hover{
        cursor: pointer;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
        scale: 1.05;
    }

    .infos-container{
        display: flex;
        justify-content: start;
        gap: 10px;
        
        .middle-div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        min-height: 68px;
        min-width: 33%;

        h4{
            font-size: clamp(1rem, 3vw, 1.2rem);
            font-weight: 600;
        }

        .fullname-paragraph{
            font-size: clamp(0.8rem, 2vw, 1rem);
            font-weight: bold;
        }

        p {
            font-size: clamp(0.6rem, 2vw, 0.8rem);
        }

        .pronouns {
            
        }
    }
    }



    .photo{
        margin-left: 10px;
        border-radius: 50%;
        align-self: center;
        aspect-ratio: 1 / 1;
        width: min(75px, 15vw);
    }


    small {
        font-size: 0.8rem;
    }

    .area-paragraph, .final-paragraph {
        font-weight: 500; 
        font-size: 14px;
        align-self: flex-start;
        white-space: nowrap;
    }

    .action-icons {
        display: flex;
        flex-direction: column;
        gap: min(1vh, 10px);

        .pen-icon,
        .trash-icon,
        .ban-icon > g > * {
            fill: var(--BLACK);
            width: 70%;
            height: 70%;
            transition: 0.15s linear;
        }

        .ban-icon {
            width: 70%;
            height: 70%;
        }

        .pen-icon:hover,
        .trash-icon:hover,
        .ban-icon > g:hover > *,
        .ban-icon:hover {
            width: 80%;
            height: 80%;
        }

        .ban-icon:hover > g > * {
            stroke: purple;
        }


        .trash-icon:hover {
            fill: red
        }

        .pen-icon:hover {
            fill: blue
        }
        
        .banned > g > *{
            stroke: purple
        }

        .banned:hover > g > * {
            stroke: green;
        }
    }
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(10vh, 70px);
    min-height: 100px;
    padding: min(1rem, 3vw);
    max-width: 90%;
    font-size: clamp(1.2rem, 3vw, 1.6rem);

    h1 {
        font-size: 1em;
        font-weight: bold;
    }

    p {
        font-size: 0.8em;
    }

    .confirm-btn {
        all: unset;
        color: var(--WHITE);
        padding: min(10px, 10vw);
        background-color: var(--BLUE);
        border-radius: min(15px, 5vw);
        height: 25px;
        font-size: 0.7em;
        align-self: flex-end;
        transition: 0.15s linear;
        cursor: pointer;
        &:hover {
            background-color: var(--BLUE-DARK);
            font-size: 0.8em;
        }
    }
`