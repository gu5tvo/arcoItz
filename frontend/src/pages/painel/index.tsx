import DinamicHeader from '../../components/header'
import { Container, PainelSection, ButtonsContainer } from "./style";
import CityIcon from '../../assets/map-icon.svg'
import ProfilePicture from '../../assets/profile-picture.svg'
import SectorIcon from '../../assets/sector-icon.svg'
import ManagerIcon from '../../assets/manager-icon.svg'
import { useAdmin } from "../../hooks/contexts";
import React from 'react'
import { Navigate } from 'react-router-dom'

import ManageButtons from "../../components/ManageButtons";

export function Painel () {

  const { adminList, admins, isAuthenticated } = useAdmin()

  const getAdmin = async ()=> {
    await adminList();

    const currentAdmin = admins.filter((admin)=> admin.name) 
  }

  if (!isAuthenticated) {
    return <Navigate to="/"/>
  }

  return (
    <Container>
      <DinamicHeader logoutBtn={true}/>
      <PainelSection>
        <div className='TextPainel'>
            <h4>Olá! Boas-vindas ao painel de admin</h4>
            <p>O que pretende fazer agora?</p>
        </div>

        <ButtonsContainer>
          <ManageButtons image={CityIcon} text='Gerenciar cidades' path='/manage-cities'/>
          <ManageButtons image={ProfilePicture} text='Gerenciar usuários' path='/manage-users'/>
          <ManageButtons image={SectorIcon} text='Gerenciar setores' path='/manage-sectors'/>
          <ManageButtons image={ManagerIcon} text='Gerenciar admins' path='/manage-admins'/>

        </ButtonsContainer>

      </PainelSection>
    </Container>
  )
}