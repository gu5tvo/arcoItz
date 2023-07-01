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
        margin-bottom: 0rem;
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
        margin-top: 1em;
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