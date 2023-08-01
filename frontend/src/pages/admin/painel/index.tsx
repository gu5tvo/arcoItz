import DinamicHeader from "../../../components/header";
import { Container, PainelSection, ButtonsContainer } from "./style";
import CityIcon from '../../../assets/map-icon.svg'
import ProfilePicture from '../../../assets/profile-picture.svg'
import SectorIcon from '../../../assets/sector-icon.svg'
import ManagerIcon from '../../../assets/manager-icon.svg'
import { useAdmin } from '../../../hooks/contexts';
import React from 'react'

import ManageButtons from '../../../components/ManageButtons';

export function Painel () {

  const { admin } = useAdmin()

  return (
    <Container>
      <DinamicHeader startBtn searchBtn logoutBtn onPanel={true}/>
      <PainelSection>
        <div className='TextPainel'>
            <h4>Olá, {`${admin.name}`}!</h4>
            <p>O que pretende fazer agora?</p>
        </div>

        <ButtonsContainer>
          <ManageButtons image={CityIcon} text='Gerenciar cidades' path='/admin/city'/>
          <ManageButtons image={ProfilePicture} text='Gerenciar usuários' path='/admin/users'/>
          <ManageButtons image={SectorIcon} text='Gerenciar setores' path='/admin/sector'/>
          {admin.isSuper ? <ManageButtons className="last" image={ManagerIcon} text='Gerenciar admins' path='/admin/manage'/> : <ManageButtons className="last" image={ManagerIcon} text='Modificar perfil' path='/admin'/>}
          

        </ButtonsContainer>

      </PainelSection>
    </Container>
  )
}