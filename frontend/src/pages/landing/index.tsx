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
                <div className="content">
                    <div className="cta">
                        <h2>Trabalhar é um direito de todes.</h2>
                        <small> Apoie essa causa, clique em ”saiba mais”.</small>
                        <Link to="/about">Saiba mais</Link>
                    </div>
                    <img src={splash} alt="Pessoa trans segurando a bandeira Trans, com o mapa do Maranhão sobreposto com as cores da bandeira do Maranhão."/>
                </div>
            </PinkSection>
            <DisclaimerSection>
                <div className="content">
                    <img src={disclaimer} alt="Mão erguida ao ar, pintada com as cores LGBT, representando uma luta por reivindicação de direitos." />
                    <div className="description">
                        <h3>Promovendo empregabilidade</h3>
                        <p>
                        Buscamos promover um ambiente onde as pessoas possam cadastrar-se e deixar visível seu currículo. Nosso foco principal é auxilar as pessoas a ingressarem no mercado de trabalho de maneira simplificada, e sem burocracia. 
                        </p>
                    </div>
                </div>
            </DisclaimerSection>
            <ActionSection>
                <BlockArticle>
                    <div>
                        <span>
                            <h4>É um recrutador?</h4>
                        </span>
                        <p>
                        Recrutador, encontre os melhores talentos para sua empresa buscando currículos em nosso site. Cadastre-se agora e encontre o candidato ideal.
                        </p>
                    </div>
                    <Link to="/search">Ver currículos</Link>
                </BlockArticle>
                <BlockArticle>
                    <div>
                        <span>
                            <h4>É um candidato?</h4>
                        </span>
                        <p>
                        Seja visto pelos melhores empregadores! Cadastre seu currículo em nosso site e aumente suas chances de conquistar seu emprego dos sonhos.
                        </p>
                    </div>
                    <Link to="/register">Cadastre-se</Link>
                </BlockArticle>
                <BlockArticle>
                    <div>
                        <span>
                            <h4>Saiba sobre nossa causa</h4>
                        </span>
                        <p>
                        Saiba mais a respeito dos nossos objetivos de maneira mais detalhada clicando no botão abaixo.
                        </p>
                    </div>
                    <Link to="/about">Saiba mais</Link>
                </BlockArticle>
            </ActionSection>
        </>
    )
}