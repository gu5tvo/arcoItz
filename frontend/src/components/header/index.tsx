import React, { useState } from "react";
import { Header, FilledBtn, OutlinedLink, UndecoratedLink } from "./styles";
import { iHeader } from "../../interfaces/header";
import { useUser, useAdmin } from "../../hooks/contexts";
import menuIcon from '../../assets/ham-btn.svg'
import  {Link}  from "react-router-dom";

export default function DinamicHeader(
    {startBtn = false, loginBtn = false, registerBtn = false,
     profileBtn = false ,logoutBtn = false, adminLogoutBtn = false,
     searchBtn = false
    }: iHeader){

    const { isAuthenticated, logout } = useUser();
    const { adminLogout } = useAdmin();
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

        function betterMenu(){
            if(loginBtn || registerBtn){
                if(isAuthenticated){
                    return(
                        <UndecoratedLink to="/dashboard">Acessar Dashboard</UndecoratedLink>
                    )
                }else if(!isAuthenticated){
                    return (
                        <>
                            {loginBtn && <UndecoratedLink to="/login">Entrar</UndecoratedLink>}
                            {registerBtn && <OutlinedLink to="/register">Cadastre-se</OutlinedLink>}
                        </>
                    )
                }
            }
        }

        const [menuClass, setMenuClass] = useState("")

        const toggleMenuState = () => {
            setShowMenu(!showMenu);

            if (showMenu)
                setMenuClass("show")
            else 
                setMenuClass("")
        }



        

    return (
        <Header>
            <img src={menuIcon} onClick={toggleMenuState}/>
            <Link to="/"><h1>DiversiTrampos</h1></Link>
          
            <span className={menuClass}>
                <nav>
                    {startBtn && <UndecoratedLink to="/">Início</UndecoratedLink>}
                    {searchBtn && <UndecoratedLink to="/search">Buscar currículos</UndecoratedLink>}
                    {betterMenu()}
                    {profileBtn && <UndecoratedLink to="/profile">Acessar meu perfil</UndecoratedLink>}
                    {logoutBtn && <FilledBtn onClick={logout}>Desconectar</FilledBtn>}
                    {adminLogoutBtn && <FilledBtn onClick={adminLogout}>Sair</FilledBtn>}
                </nav>
            </span>
        </Header>
    )
}