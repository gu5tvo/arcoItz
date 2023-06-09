import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    padding: 2em;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #48A7FF;
    font-family: 'Inter', sans-serif;
    position: relative;

    img {
        display: none;
    }

    nav{
        gap: 1.9vw;
        font-size: 1.01rem;
        color: #ffffff;

        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .mobile{
        display: none;
    }

    a{
        text-decoration: none;
    }

    h1{
        font-size: 1.8em;
        color: #ffffff;
        font-weight: 900;
    }

    @media (max-width: 768px){

        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1{
            font-size: 1.7em;
        }

        nav{
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        span {
            display: grid;
            grid-template-rows: 0fr;
            transition: 0.15s linear;
        }

        .show {
            margin-top: 1.5rem;
            grid-template-rows: 1fr;
        }

        nav {
            overflow: hidden;
        }

        
        background-color: ${props => props.color};

        img {
            display: inline;
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }

    }
`

export const FilledBtn = styled.button`
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.8rem;
    background-color: #ffffff;
    color: #48A7FF;
    font-size: 1em;
    transition: 0.2s all ease-in-out;

    &:hover{
        background-color: #48A7FF;
        color: #ffffff;
        outline: 1px solid #ffffff;
        cursor: pointer;
    }
`

export const OutlinedLink = styled(Link)`
    padding: 0.5em 1em;
    border: 1px solid #ffffff;
    border-radius: 0.8rem;
    background-color: transparent;
    color: #ffffff;
    font-size: 1em;
    transition: 0.2s all ease-in-out;
    text-decoration: none;

    &:hover{
        background-color: #ffffff;
        color: #48A7FF;
        outline: 1px solid #48A7FF;
        cursor: pointer;
    }
`

export const FilledLink = styled(Link)`
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.8rem;
    background-color: #ffffff;
    color: #48A7FF;
    font-size: 1em;
    transition: 0.2s all ease-in-out;
    text-decoration: none;

    &:hover{
        background-color: #48A7FF;
        color: #ffffff;
        outline: 1px solid #ffffff;
        cursor: pointer;
    }
`

export const UndecoratedLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 1em;
    transition: 0.2s all ease-in-out;

    &:hover{
        scale: 1.05;
        cursor: pointer;
    }
`