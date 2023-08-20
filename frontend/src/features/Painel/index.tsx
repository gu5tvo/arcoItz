import { GerenciarButtons } from "../../components/GerenciarButtons";
import { Header } from "../../layouts/Header";
import { PainelButtons } from "../../utils/HeaderButtons";
import { Container, PainelSection } from "./style";

export function Painel () {
  return (
    <Container>
      <Header header={PainelButtons}/>
      <PainelSection>
        <div className='TextPainel'>
            <AdminText>Olá, angelo</AdminText>
            <OptionText>O que pretende fazer agora?</OptionText>
        </div>
        <GerenciarButtons Color="#721818" Text='Gerenciar cidades'/>
        <GerenciarButtons Color="#3f2ec2" Text='Gerenciar usuários'/>
        <GerenciarButtons Color="#597218" Text='Gerenciar Usuários'/>
      </PainelSection>
    </Container>
  )
}