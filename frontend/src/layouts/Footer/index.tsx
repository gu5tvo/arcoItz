/* eslint-disable react/react-in-jsx-scope */
import SocialMediaCollection from "../SocialMediaCollection";
import { BottomSection, Column, ColumnTitle, CopyrightNotice, DiversiLogo, FooterStyle, Hr, LogoCollection, Page, TechJrLogo, TextCollection, TopSection } from "./style";
import diversIcon from '../../assets/diversIconWhite.svg'
import techjr from '../../assets/techjr-logo.svg'

export default function Footer(){

  return (
    <>
      <FooterStyle>
        <TopSection>
            <LogoCollection>
                <DiversiLogo src={diversIcon}/>
                <SocialMediaCollection iconColor="var(--WHITE)" />
            </LogoCollection>
            <TextCollection>
                <Column>
                    <ColumnTitle>NAVEGUE POR AQUI</ColumnTitle>                 
                    <Page to="/">Início</Page>
                    <Page to="/">Sobre nós</Page>
                    <Page to="/dashboard">Currículo</Page>
                </Column>
                <Column>
                    <ColumnTitle>INFORMAÇÕES</ColumnTitle>                
                    <Page to="/politicas-de-cookies#">Políticas de cookies</Page>
                    <Page to="/politicas-de-uso#">Políticas de uso</Page>
                </Column>
                <Column>
                    <ColumnTitle>CONTATO</ColumnTitle>                
                    <Page to="">email@gmail.com</Page>
                    <Page to="">(XX) X XXXX-XXXX</Page>
                </Column>
            </TextCollection>
        </TopSection>

        <Hr />
        
        <BottomSection>
          <CopyrightNotice>
            Arco ITZ © 2023 | All rights reseved
          </CopyrightNotice>
          <TechJrLogo src={techjr}/>
        </BottomSection>
      </FooterStyle>
    </>
  );
}
