import React, { useState } from "react";
import { Header, FilledBtn, OutlinedLink, UndecoratedLink } from "./styles";
import { iHeader } from "../../interfaces/header";
import { useUser, useAdmin } from "../../hooks/contexts";
import menuIcon from '../../assets/ham-btn.svg'
import  { Link, useNavigate }  from "react-router-dom";

export default function DynamicHeader(
    {startBtn = false, loginBtn = false, registerBtn = false,
     profileBtn = false, logoutBtn = false, adminLogoutBtn = false,
     searchBtn = false, adminPanel = false
    }: iHeader){

    const navigate = useNavigate();

    const { isAuthenticated: userAuthenticated, logout, user } = useUser();
    const { isAuthenticated: adminAuthenticated, adminLogout } = useAdmin();
    const [showMenu, setShowMenu] = useState(false);


    function betterMenu(){
        if (adminPanel && adminAuthenticated) {
            return (
                <UndecoratedLink to="/admin/painel">Administração</UndecoratedLink>
            )
        }

        if(loginBtn || registerBtn){
            if(userAuthenticated){
                return(
                    <UndecoratedLink to="/dashboard">Acessar Dashboard</UndecoratedLink>
                )
            }else if(!userAuthenticated){
                return (
                    <>
                        {loginBtn && <UndecoratedLink to="/login">Entrar</UndecoratedLink>}
                        {registerBtn && <OutlinedLink to="/register">Cadastre-se</OutlinedLink>}
                    </>
                )
            }
        }
    }

    const onLogout = ()=> {
        if (userAuthenticated) {
            logout()
            navigate('/login');
        } else if (adminAuthenticated) {
            adminLogout()
            navigate('/admin/login')
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
                    {profileBtn && <UndecoratedLink to={`/profile/${user.id}`}>Acessar meu perfil</UndecoratedLink>}
                    {logoutBtn && <FilledBtn onClick={onLogout}>Desconectar</FilledBtn>}
                    {adminLogoutBtn && <FilledBtn onClick={onLogout}>Desconectar</FilledBtn>}
                </nav>
            </span>
        </Header>
    )
}