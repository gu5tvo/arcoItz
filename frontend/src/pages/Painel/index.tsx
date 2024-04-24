import { GerenciarButtons } from "../../components/GerenciarButtons";
import { useAdmin } from "../../hooks/contexts";
import Header from "../../layouts/Header/index";
import { Container, PainelSection } from "./style";
import React from 'react'

export function Painel () {
  const { admin } = useAdmin();

  return (
    <Container>
      <Header adminLogoutBtn startBtn />
      <PainelSection>
        <div className='TextPainel'>
            <h4>Olá, {admin.name}</h4>
            <p>O que pretende fazer agora?</p>
        </div>
        <GerenciarButtons Color="#721818" Text='Gerenciar cidades'/>
        <GerenciarButtons Color="#3f2ec2" Text='Gerenciar usuários'/>
        <GerenciarButtons Color="#597218" Text='Gerenciar Usuários'/>
      </PainelSection>
    </Container>
  )
}