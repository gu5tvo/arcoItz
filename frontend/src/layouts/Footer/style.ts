import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterStyle = styled.footer`
    box-sizing: border-box;
    width: 100%;
    display: inline-flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;

    background-color: var(--MODERATE-BLACK);
    font-family: 'Poppins', 'Inter', sans-serif;
    color: var(--WHITE);

`

export const TopSection = styled.section`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 780px){
        justify-content: center;
        flex-direction: column-reverse;
    }   
`

export const BottomSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const LogoCollection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

export const DiversiLogo = styled.img`
    margin-left: 42px;
    width: min(80vw, 320px);
    align-self: center; 

`

export const TechJrLogo = styled.img`
    width:  160px;
    align-self: center; 
`

export const TextCollection = styled.div`
    margin-top: 20px;
    margin-right: 32px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: min(10vw , 70px);
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
        text-decoration: none;
        color: white;
        font-size: clamp(0.8rem, 1vw, 1.05rem);
        display: flex;
    
        &:hover {
            transform: scale(1.05);
        }
    
        &:active {
            transform: scale(1.05);
        }   
    }
`

export const ColumnTitle = styled.p`
    display: flex;
    margin-bottom: 4px;
    font-weight: 700;
    font-size: clamp(0.92rem, 1.05vw, 1.1rem);
`

export const Page = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: clamp(0.8rem, 1vw, 1.05rem);
    display: flex;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1.05);
    }
`

export const CopyrightNotice = styled.p`
    font-size: clamp(1rem, 1.1vw, 1.2rem);
`

export const Hr = styled.hr`
    margin-top: 40px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 60vw;
    border: none;
    height: 1px;
    background-color: var(--WHITE); 
    align-self: center;
    @media (max-width: 500px){
        max-width: 80vw;
        width: 100%;
    }   

`;