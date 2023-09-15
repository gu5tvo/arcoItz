import React, { useState } from "react";
import { StyledHeader, FilledBtn, UndecoratedLink, NavbarButtons, SignInButton, SignUpButton, DiversiLogo, Navbar, HeaderWrapper, NavbarWrapper, NavbarLinks, MenuIcon } from "./styles";
import { iHeader } from "../../interfaces/header";
import { useUser, useAdmin } from "../../hooks/contexts";
import diversIcon from '../../assets/diversIcon.svg'
import  { useNavigate }  from "react-router-dom";

export default function DynamicHeader(
    {startBtn = false, loginBtn = false, registerBtn = false,
     profileBtn = false, logoutBtn = false, onDashboard = false, onPanel = false,
     searchBtn = false
    }: iHeader){

    const navigate = useNavigate();
    
    const { isAuthenticated: userAuthenticated, logout, user } = useUser();
    const { isAuthenticated: adminAuthenticated, adminLogout, adminSelf } = useAdmin();

    const [showMenu, setShowMenu] = useState(false);

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
                        {registerBtn && <SignUpButton to="/cadastro">Cadastre-se</SignUpButton>}
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
                            {searchBtn && <UndecoratedLink to="/buscar">Buscar perfis</UndecoratedLink>}
                            {profileBtn && <UndecoratedLink to={`/perfil/${user?.id}`}>Currículo</UndecoratedLink>}
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
