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
                    <Page>Início</Page>
                    <Page>Sobre nós</Page>
                    <Page>Currículo</Page>
                    <Page>Empresa</Page>
                </Column>
                <Column>
                    <ColumnTitle>INFORMAÇÕES</ColumnTitle>                
                    <Page>Política de cookies</Page>
                    <Page>Política de uso</Page>
                </Column>
                <Column>
                    <ColumnTitle>CONTATO</ColumnTitle>                
                    <Page>email@gmail.com</Page>
                    <Page>(XX) X XXXX-XXXX</Page>
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
};
