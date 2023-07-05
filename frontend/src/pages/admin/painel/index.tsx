import DinamicHeader from "../../../components/header";
import { Container, PainelSection, ButtonsContainer } from "./style";
import CityIcon from '../../assets/../map-icon.svg'
import ProfilePicture from '../../../assets/profile-picture.svg'
import SectorIcon from '../../assets/sector-icon.svg'
import ManagerIcon from '../../../assets/manager-icon.svg'
import { useAdmin } from '../../../hooks/contexts';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import ManageButtons from '../../../components/ManageButtons';

export function Painel () {

  const { isAuthenticated, adminSelf, admin } = useAdmin()
  const [loaded, setLoaded] = useState(false)

  useEffect(()=> {
    (async ()=> {
        await adminSelf()
        setLoaded(true)
      })()
  }, [])

  if (!loaded) return <></>

  if (!isAuthenticated) {
    return <Navigate to="/"/>
  }

  return (
    <Container>
      <DinamicHeader adminLogoutBtn/>
      <PainelSection>
        <div className='TextPainel'>
            <h4>Olá, {`${admin.name}`}!</h4>
            <p>O que pretende fazer agora?</p>
        </div>

        <ButtonsContainer>
          <ManageButtons image={CityIcon} text='Gerenciar cidades' path='/admin/city'/>
          <ManageButtons image={ProfilePicture} text='Gerenciar usuários' path='/admin/users'/>
          <ManageButtons image={SectorIcon} text='Gerenciar setores' path='/manage-sectors'/>
          {admin.isSuper ? <ManageButtons image={ManagerIcon} text='Gerenciar admins' path='/admin/manage'/> : <ManageButtons image={ManagerIcon} text='Modificar perfil' path='/admin'/>}
          

        </ButtonsContainer>

      </PainelSection>
    </Container>
  )
}