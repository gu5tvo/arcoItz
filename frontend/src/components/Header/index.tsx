import React, { useEffect, useState } from "react";
import { StyledHeader, FilledBtn, UndecoratedLink, NavbarButtons, SignInButton, SignUpButton, DiversiLogo, Navbar, HeaderWrapper, NavbarWrapper, NavbarLinks, MenuIcon } from "./styles";
import { iHeader } from "../../interfaces/header";
import { useUser, useAdmin } from "../../hooks/contexts";
import diversIcon from '../../assets/diversIcon.svg'
import  { useNavigate }  from "react-router-dom";

export default function DynamicHeader(
    {startBtn = false, loginBtn = false, registerBtn = false,
     profileBtn = false, logoutBtn = false,
     searchBtn = false, onDashboard = false, onPanel = false
    }: iHeader){

    const navigate = useNavigate();
    
    const { isAuthenticated: userAuthenticated, logout, user, profile } = useUser();
    const { isAuthenticated: adminAuthenticated, adminLogout, adminSelf } = useAdmin();

    const [showMenu, setShowMenu] = useState(false);

    useEffect(()=> {
        profile({ showError: false })
        adminSelf(false)
    }, [])



    function betterMenu(){
        if (adminAuthenticated) {
            return (<>
                { !onPanel && <UndecoratedLink to="/admin/painel">Administração</UndecoratedLink> }
                <FilledBtn onClick={onLogout}>Desconectar</FilledBtn>
                </>
            )
        }

        if(loginBtn || registerBtn || logoutBtn){
            if(userAuthenticated){
                return(<>
                    { !onDashboard && <UndecoratedLink to="/dashboard">Acessar Dashboard</UndecoratedLink> }
                    <FilledBtn onClick={onLogout}>Desconectar</FilledBtn>
                    </>
                )
            } else {
                return (
                    <>
                        {registerBtn && <SignUpButton to="/register">Cadastre-se</SignUpButton>}
                        {loginBtn && <SignInButton to="/login">Entrar</SignInButton>}
                    </>
                )
            }
        }
    }

    const onLogout = ()=> {
        if (adminAuthenticated) {
            adminLogout()
            adminSelf(false)
            navigate('/admin/login')
        } else if (userAuthenticated) {
            logout()
            profile({ showError: false })
            navigate('/login');
        }
    }

    return (
        <HeaderWrapper>
            <StyledHeader $showMenu={showMenu}>
                <DiversiLogo src={diversIcon}/>
                <NavbarWrapper $showMenu={showMenu}>
                    <Navbar>
                        <NavbarLinks>
                            {startBtn && <UndecoratedLink to="/">Início</UndecoratedLink>}
                            {searchBtn && <UndecoratedLink to="/search">Sobre nós</UndecoratedLink>}
                            {profileBtn && <UndecoratedLink to={`/profile/${user.id}`}>Currículo</UndecoratedLink>}
                            {<UndecoratedLink to="">Empresa</UndecoratedLink>}
                            {<UndecoratedLink to="">Contato</UndecoratedLink>}
                        </NavbarLinks>
                        <NavbarButtons>
                            { betterMenu() }
                        </NavbarButtons>
                    </Navbar>
                </NavbarWrapper>
            </StyledHeader>

            <MenuIcon onClick={()=>setShowMenu(!showMenu)}/>
        </HeaderWrapper>
    )
}
