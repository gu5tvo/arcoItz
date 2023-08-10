import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'

export const HeaderWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
`

export const StyledHeader = styled.header<{ $showMenu: boolean }>`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min(100vw, 2200px);

    background-color: #FFFFFF;
    justify-content: space-evenly;
    padding: min(20px, 6vh) min(30px, 3vw);
    gap: min(30px, 10vw);

    @media (max-width: 1000px){

        align-items: center;
        justify-content: center;
        flex-direction: ${props => props.$showMenu ? 'column' : 'row'};
        
        .show {
            margin-top: 1.5rem;
        }
    }
`

export const DiversiLogo = styled.img`
    width: min(30vw, 150px);
    
    @media (max-width: 1000px) { 
        align-self: flex-start; 
    }

`

export const NavbarButtons = styled.div`
    justify-self: flex-end;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: min(20px, 5vw);

    padding: 10px;
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

export const UndecoratedLink = styled(Link)`
    text-decoration: none;
    color: #1E1E1E;
    font-size: 1.25rem;
    transition: 0.2s all ease-in-out;
    white-space: nowrap;
    cursor: pointer;
    padding: min(15px, 5vw) min(30px, 10vw);
    border-style: hidden;
    border-radius: min(0.5rem, 3vw);
    &:hover{
        scale: 1.1;
    }
`

export const SignInButton = styled(UndecoratedLink)`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    background-color: var(--AQUABLUE);
    color: white;
    gap: 0.5rem;
    transition: 0.15s;

    &:hover {
        background-color: var(--BLUE);
    }
`

export const SignUpButton = styled(UndecoratedLink)`
    color: black;
    border-style: hidden;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    transition: 0.15s;
    outline: 1px solid var(--BLUE-DARK);
    
    &:hover {
        outline: none;
        color: var(--WHITE);
        background-color: var(--BLUE-DARK);
    }
`


export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const NavbarLinks = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: min(2vw, 6px);
`

export const NavbarWrapper = styled.span<{ $showMenu: boolean }>`
    display: flex;
    align-items: center;
    
    @media (max-width: 1000px){
        flex: 1;
        display: grid;
        grid-template-columns: ${props => props.$showMenu ? '1fr' : '0fr'};
        grid-template-rows: ${props => props.$showMenu ? '1fr' : '0fr'};
        transition: 0.15s linear;

        ${Navbar} {
            flex-direction: column;
            &, * { overflow: hidden; }

            position: relative;
            top: 0;
            ${NavbarLinks} {
                flex-direction: column;
            }
        }
    }
`

export const MenuIcon = styled(GiHamburgerMenu)`
    --size: min(10vw, 20px);
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;

    @media (min-width: 1001px) {
        display: none;
    }
`