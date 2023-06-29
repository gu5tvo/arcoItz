import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PinkSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    text-align: center;
    position: relative;
    
    .content { 
        width: min(100vw, 2200px);
        background-color: #FFCCE4;
        position: relative;
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 768px){

        img{
            display: none;
        }

        .content {
            justify-content: center;
            padding: 2rem;            
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
    padding: 1rem 2rem;    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1rem, 1vw, 1.3rem);
    line-height: clamp(1.5rem, 3vw, 1.9rem);

    .content {
        width: min(100vw, 2200px);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #FFF;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .description{
        width: 30%;
        padding: 2rem;            
    }

    h3{
        margin-bottom: 1em;
        font-size: 1.5em;
        font-weight: 700;
    }

    p {
        text-align: left;
        line-height: 1.3em;
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
    gap: min(4rem, 7vw);
`

export const BlockArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    width: 330px;
    min-height: 280px;
    background-color: #FFFFFF;
    border-radius: 1em;
    padding: 1em;
    outline: 1px solid #48A7FF;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0 #48A7FF;
    text-align: left;
    font-size: clamp(1rem, 1vw, 1.3rem);
    
    &:hover{
        scale: 1.05;
        box-shadow: 0 0 .6em #48A7FF;
    }


    div h4{
        font-size: 1em;
        font-weight: 700;
        margin-bottom: 1rem;
        text-align: center;
        line-height: 1.1em;
    }

    div p{
        text-rendering: optimizeLegibility;
        line-height: 1.15em;
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

        span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: min(10vh, 40px);

        }
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