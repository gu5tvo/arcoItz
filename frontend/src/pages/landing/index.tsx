import React from "react";
import DinamicHeader from "../../components/header";
import {PinkSection, DisclaimerSection, ActionSection, BlockArticle} from './styles'
import { Link } from "react-router-dom";
import splash from '../../assets/splash.svg'
import disclaimer from '../../assets/disclaimer.svg'

export default function LandingPage(): JSX.Element{
    document.title = "Página inicial | DiversiTrampos";
    return (
        <>
            <DinamicHeader loginBtn={true} registerBtn={true} searchBtn={true}/>
            <PinkSection>
                <div>
                    <h2>Trabalhar é um direito de todes.</h2>
                    <small>Apoie essa causa, clique em ”saiba mais”.</small>
                    <Link to="/about">Saiba mais</Link>
                </div>
                <img src={splash} alt="Mulher trans segurando a bandeira Trans, com o mapa do maranhão sobreposto com as cores da bandeira do maranhão."/>
            </PinkSection>
            <DisclaimerSection>
                <img src={disclaimer} alt="Mão erguida ao ar, pintada com as cores LGBT, representando uma luta por reivindicação de direitos." />
                <div>
                    <h3>Promovendo empregabilidade</h3>
                    <p>
                    Buscamos promover um ambiente onde as pessoas possam cadastrar-se e deixar visível seu currículo. Nosso foco principal é auxilar as pessoas a ingressarem no mercado de trabalho de maneira simplificada, e sem burocracia. 
                    </p>
                </div>
            </DisclaimerSection>
            <ActionSection>
                <BlockArticle>
                    <h4>É um recrutador?</h4>
                    <p>
                    Recrutador, encontre os melhores talentos para sua empresa buscando currículos em nosso site. Cadastre-se agora e encontre o candidato ideal.
                    </p>
                    <Link to="/search">Ver currículos</Link>
                </BlockArticle>
                <BlockArticle>
                    <h4>É um candidato?</h4>
                    <p>
                    Seja visto pelos melhores empregadores! Cadastre seu currículo em nosso site e aumente suas chances de conquistar seu emprego dos sonhos.
                    </p>
                    <Link to="/register">Cadastre-se</Link>
                </BlockArticle>
                <BlockArticle>
                    <h4>Saiba sobre nossa causa</h4>
                    <p>
                    Saiba mais a respeito dos nossos objetivos de maneira mais detalhada clicando no botão abaixo.
                    </p>
                    <Link to="/about">Saiba mais</Link>
                </BlockArticle>
            </ActionSection>
        </>
    )
}