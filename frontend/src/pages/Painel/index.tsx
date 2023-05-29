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
            <h4>Olá, angelo</h4>
            <p>O que pretende fazer agora?</p>
        </div>
        <GerenciarButtons Color="#721818" Text='Gerenciar cidades'/>
        <GerenciarButtons Color="#3f2ec2" Text='Gerenciar usuários'/>
        <GerenciarButtons Color="#597218" Text='Gerenciar Usuários'/>
      </PainelSection>
    </Container>
  )
}