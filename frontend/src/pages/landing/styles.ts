import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PinkSection = styled.section`
    background-color: #FFCCE4;
    padding: 0 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 45svh;
    font-family: 'Roboto', sans-serif;
    text-align: center;

    @media (max-width: 768px){
        img{
            display: none;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    h2{
        font-size: 2em;
        font-weight: 700;
        width: 60%;
        color: #0A2A5E;
    }
    small{
        font-size: 0.8em;
        font-weight: 400;
        color: #0A2A5E;
    }

    img{
        position: inherit;
        margin-bottom: -5.5rem;
    }

    a{
        text-decoration: none;
        color: #fff;
        background-color: #48A7FF;
        padding: 0.5em 1em;
        transition: all 0.3s ease-in-out;
        border-radius: 0.5em;
        margin-top: .5em;

        &:hover{
            cursor: pointer;
            scale: 1.05;
        }
    }
`

export const DisclaimerSection = styled.section`
    background-color: #FFFFFF;
    padding: 1em 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    div{
        width: 30%;
    }

    h3{
        margin-bottom: 1em;
        font-size: 1.5em;
        font-weight: 700;
    }

    @media (max-width: 768px){
        div{
            width: 100%;
            padding: 1em;
        }
        img{
            display: none;
        }
    }
`

export const ActionSection = styled.section`
    padding: 3em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 2em;
    }
`

export const BlockArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 240px;
    height: 280px;
    background-color: #FFFFFF;
    border-radius: 1em;
    padding: 1em;
    outline: 1px solid #48A7FF;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0 #48A7FF;

    &:hover{
        scale: 1.05;
        box-shadow: 0 0 .6em #48A7FF;
    }


    h4{
        font-size: 1.2em;
        font-weight: 700;
    }

    p{
        text-rendering: optimizeLegibility;
        width: 80%;
    }

    a{
        text-decoration: none;
        color: #fff;
        background-color: #48A7FF;
        padding: 0.5em 1em;
        transition: all 0.3s ease-in-out;
        border-radius: 0.5em;
        margin-top: .5em;

        &:hover{
            cursor: pointer;
            scale: 1.05;
        }
    }
`