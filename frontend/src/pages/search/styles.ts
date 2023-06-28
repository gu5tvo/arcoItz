import styled from 'styled-components';

export const SearchContainer = styled.div`
    margin-top: min(5vh, 30px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2em;
    width: 19vw;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    height: fit-content;
    font-size: 1rem;

    label{
        margin-bottom: 0.3rem;
    }

    .label-pagina{
        margin-top: 0.5rem;
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
    }

    button{
        margin-top: 1em;
        border: none;
        padding: 1em;
        border-radius: 0.5rem;
        background-color: #48A7FF;
        color: #fff;
        transition: 0.3s all ease-in-out;

        &:hover{
            cursor: pointer;
            background-color: #3F8FCC;
        }
    }

    nav{
        max-width: 50%;
        box-sizing: border-box;
        display: inline-flex;
        margin-top: 1em;
        justify-content: center;

        button{
            margin: 0 .5em;
        }

        input{
            padding: 1em;
            margin: 0 .5em;
            border: none;
            background-color: #eee;
            max-width: 15%;
            border-radius: 0.5rem;
            text-align: center;
        }
    }
`;

export const SearchView = styled.section`
    width: 74vw;
    display: flex;
    justify-content: center;
    gap: min(20px, 10vw);
    flex-wrap: wrap;
`;