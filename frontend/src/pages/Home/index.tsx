import { Header } from "../../layouts/Header"
import { HomepageButtons } from "../../utils/HeaderButtons"
import { ContentSection, Container, CoverSection, AboutSection } from "./style"
import { Button } from "../../components/Button"

import coverImage from "../../assets/images/cover.png"
import strongImage from "../../assets/images/strong.png"
import { AboutBox } from "../../components/AboutBox"


export function Home() {

  return (
    <Container>
      <Header header={HomepageButtons}/>
      <CoverSection>
        <div className="text-cover">
          <h1>Trabalhar é um direito de todes.</h1>
          <p>Apoie essa causa, clique em ”saiba mais”.</p>
          <Button>Saiba Mais</Button>
        </div>
        <div className="image-cover">
        <img src={coverImage} alt="Imagem de Cover" />
        </div>
      </CoverSection>
      <ContentSection>
        <img src={strongImage} alt="Luta" />
        <div className="text-content">
          <h2>
          Promover empregabilidade
          </h2>
          <h4>
          Buscamos promover um ambiente onde as pessoas possam cadastrar-se 
          e deixar visível seu currículo. Nosso foco principal é auxilar as 
          pessoas a ingressarem no mercado de trabalho de maneira simplificada, 
          e sem burocracia. 
          </h4>
        </div>
      </ContentSection>
      <AboutSection>
        <div className="about-box">
          <AboutBox 
          title="É um recrutador?"
          
          textContent="Recrutador, encontre os melhores 
          talentos para sua empresa 
          buscando currículos em nosso site. 
          Cadastre-se agora e encontre o candidato ideal."

          textButton="Ver curriculos"
          />
          <AboutBox 
          title="É um candidato?"
          
          textContent="Seja visto pelos melhores empregadores! 
          Cadastre seu currículo em nosso site e aumente suas 
          chances de conquistar seu emprego dos sonhos."

          textButton="Cadastre-se"
          />
          <AboutBox
          title="Saiba sobre nossa causa"
          
          textContent="Saiba mais a respeito dos nossos objetivos 
          de maneira mais detalhada clicando no botão abaixo."

          textButton="Saiba mais"
          />
        </div>
      </AboutSection>
    </Container>
  )
}
