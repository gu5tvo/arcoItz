import React, { useState } from "react";
import { Header, FilledBtn, OutlinedLink, UndecoratedLink } from "./styles";
import { iHeader } from "../../interfaces/header";
import { useUser, useAdmin } from "../../hooks/contexts";

export default function DinamicHeader(
    {startBtn = false, loginBtn = false, registerBtn = false,
     profileBtn = false ,logoutBtn = false, adminLogoutBtn = false,
     searchBtn = false
    }: iHeader){

    const { isAuthenticated, logout } = useUser();
    const { adminLogout } = useAdmin();
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <Header>
            <h1>DiversiTrampos</h1>
            <nav className="desktop">
                {startBtn && <UndecoratedLink to="/">Início</UndecoratedLink>}
                {searchBtn && <UndecoratedLink to="/search">Buscar currículos</UndecoratedLink>}
                {betterMenu()}
                {profileBtn && <UndecoratedLink to="/profile">Acessar meu perfil</UndecoratedLink>}
                {logoutBtn && <FilledBtn onClick={logout}>Desconectar</FilledBtn>}
                {adminLogoutBtn && <FilledBtn onClick={adminLogout}>Sair</FilledBtn>}
            </nav>
            <nav className="mobile">
                {startBtn && <UndecoratedLink to="/">Início</UndecoratedLink>}
                {searchBtn && <UndecoratedLink to="/search">Buscar currículos</UndecoratedLink>}
                {betterMenu()}
                {profileBtn && <UndecoratedLink to="/profile">Acessar meu perfil</UndecoratedLink>}
                {logoutBtn && <FilledBtn onClick={logout}>Desconectar</FilledBtn>}
                {adminLogoutBtn && <FilledBtn onClick={adminLogout}>Sair</FilledBtn>}
            </nav>
        </Header>
    )
}