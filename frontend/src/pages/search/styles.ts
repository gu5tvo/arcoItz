import styled from 'styled-components';

export const SearchContainer = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: row;
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 16vw;
    background-color: #fff;
    padding: 2em;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    height: fit-content;

    label{
        margin-bottom: 0.3rem;
    }

    h3{
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
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
        box-sizing: border-box;
        display: flex;
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
            width: 30%;
            border-radius: 0.5rem;
            text-align: center;
        }
    }
`;

export const SearchView = styled.section`
    width: calc(100% - 520px);
    margin-left: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;