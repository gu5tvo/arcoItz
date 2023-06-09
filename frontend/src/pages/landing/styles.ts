import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PinkSection = styled.section`
    background-color: ${props => props.colors};
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    text-align: center;
    position: relative;
    
    .content { 
        width: min(100vw, 2200px);
        position: relative;
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 768px){

        padding: 2rem;

        img{
            display: none;
        }

        .content {
            justify-content: center;
            
        }
    }

    .cta{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    h2{
        font-size: clamp(1.7rem, 2vw, 2.4rem);
        font-weight: 900;
        width: 60%;
        color: #0A2A5E;
    }
    
    small{
        padding-top: 0.6em;
        padding-bottom: 0.6em;
        font-size: clamp(0.8rem, 1vw, 1.2rem);
        font-weight: 600;
        color: #0A2A5E;
    }

    img{
        position: relative;
        bottom: 0;
        max-width: 30%;
        width: 100vw;
        margin-left: 4vw;        
    }

    a{
        text-decoration: none;
        color: #fff;
        background-color: #48A7FF;
        padding: 0.5em 1em;
        transition: all 0.3s ease-in-out;
        border-radius: 0.5em;
        margin-top: .5em;
        font-size: clamp(0.95rem, 0.95vw, 1.2rem);

        &:hover{
            cursor: pointer;
            scale: 1.05;
        }
    }
`

export const DisclaimerSection = styled.section`
    width: 100vw;

    background-color: #FFFFFF;
    padding: 1rem 2rem;    
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .content {
        width: min(100vw, 1700px);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .description{
        width: 30%;
    }

    h3{
        margin-bottom: 1em;
        font-size: 1.5em;
        font-weight: 700;
    }

    p {
        text-align: left;
        line-height: 1.3rem;
    }

    @media (max-width: 768px){

        padding: 2rem 0;

        .description{
            text-align: center;
            width: 80%;
        }

        img{
            display: none;
        }

        .content {
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`

export const ActionSection = styled.section`
    padding: 3em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: min(4rem, 7vw);
`

export const BlockArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    text-align: left;
    
    &:hover{
        scale: 1.05;
        box-shadow: 0 0 .6em #48A7FF;
    }


    div h4{
        font-size: 1.1em;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    div p{
        text-rendering: optimizeLegibility;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;    
        gap: 0.7rem;
        line-height: 1.2rem;
        padding: 0.8rem;
        padding-bottom: 0;
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