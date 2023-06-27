import { GerenciarButtons } from "../../components/GerenciarButtons";
import { Header } from "../../layouts/Header";
import { PainelButtons } from "../../utils/HeaderButtons";
import { Container, PainelSection, ButtonsContainer } from "./style";

import CityIcon from '../../assets/images/map-icon.svg'
import ProfilePicture from '../../assets/images/profile-picture.svg'
import SectorIcon from '../../assets/images/sector-icon.svg'
import ManagerIcon from '../../assets/images/manager-icon.svg'
import { useAdmin } from "../../hooks/contexts";

export function Painel () {

  const { adminList, admins } = useAdmin()

  const getAdmin = async ()=> {
    await adminList();

    const currentAdmin = admins.filter((admin)=> admin.name)
  }

  return (
    <Container>
      <Header header={PainelButtons}/>
      <PainelSection>
        <div className='TextPainel'>
            <h4>Olá, jij</h4>
            <p>O que pretende fazer agora?</p>
        </div>

        <ButtonsContainer>
          <GerenciarButtons Image={CityIcon} Text='Gerenciar cidades' Path='/manage-cities'/>
          <GerenciarButtons Image={ProfilePicture} Text='Gerenciar usuários' Path='/manage-users'/>
          <GerenciarButtons Image={SectorIcon} Text='Gerenciar setores' Path='/manage-sectors'/>
          <GerenciarButtons Image={ManagerIcon} Text='Gerenciar admins'Path='/manage-admins'/>

        </ButtonsContainer>

      </PainelSection>
    </Container>
  )
}