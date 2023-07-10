import React, { useEffect, useState } from "react";
import { Header, FilledBtn, OutlinedLink, UndecoratedLink } from "./styles";
import { iHeader } from "../../interfaces/header";
import { useUser, useAdmin } from "../../hooks/contexts";
import menuIcon from '../../assets/ham-btn.svg'
import  { Link, useNavigate }  from "react-router-dom";

export default function DynamicHeader(
    {startBtn = false, loginBtn = false, registerBtn = false,
     profileBtn = false, logoutBtn = false, adminLogoutBtn = false,
     searchBtn = false, adminPanel = false, onDashboard = false, onPanel = false
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
                        {loginBtn && <UndecoratedLink to="/login">Entrar</UndecoratedLink>}
                        {registerBtn && <OutlinedLink to="/register">Cadastre-se</OutlinedLink>}
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
                    {profileBtn && <UndecoratedLink to={`/profile/${user.id}`}>Acessar meu perfil</UndecoratedLink>}
                    {betterMenu()}
                </nav>
            </span>
        </Header>
    )
}