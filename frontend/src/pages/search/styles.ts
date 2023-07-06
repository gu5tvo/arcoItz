import styled from 'styled-components';

export const SearchContainer = styled.main`
    margin-top: min(5vh, 30px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: min(10vw, 3rem);
    padding: min(1.5rem, 2vw);

    @media (width > 1500px) {
        gap: 20px;
    }

    .nav-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        label {
            font-weight: 700;
            gap: min(10px, 3vh);
        }
    }
    nav{
        max-width: 200px;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
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
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: min(20px, 5vw);
    flex-wrap: wrap;
    min-width: min(90vw, 400px);
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    height: fit-content;
    font-size: 1rem;
    padding: min(1rem, 2vw);

    label{
        margin-bottom: 0.4rem;
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


    .form-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const SearchView = styled.section`
    width: min(90vw, 2000px);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    gap: min(6vw, 60px);

`;