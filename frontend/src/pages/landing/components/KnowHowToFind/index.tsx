import React from 'react'
import { SectionContainer, OuterCircle, PartnersExhibit, PartnerLogo, InnerCircle, CompaniesNumber, InnerCircleDescription, DiscoveryContainer, SubHeading, Heading, Paragraph, Headings, Text } from "./style";

export default function KnowHowToFind() {


    return (
        <SectionContainer>
            <PartnersExhibit>
                <Headings $mobile>
                    <SubHeading>
                        Está em busca de telantos?
                    </SubHeading>
                    <Heading>
                        Descubra como encontrar
                    </Heading>
                </Headings>

                <OuterCircle>
                    <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={1} $layer="outer"/>
                    <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={2} $layer="outer"/>
                    <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={3} $layer="outer"/>
                    <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={4} $layer="outer"/>
                    <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={5} $layer="outer"/>

                    <InnerCircle>
                        <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={1} $layer="inner"/>
                        <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={2} $layer="inner"/>
                        <PartnerLogo src="https://en.pimg.jp/054/787/903/1/54787903.jpg" $order={3} $layer="inner"/>

                        <CompaniesNumber>20+</CompaniesNumber>
                        <InnerCircleDescription>Empresas cadastradas</InnerCircleDescription>
                    </InnerCircle>
                </OuterCircle>
            </PartnersExhibit>
            <DiscoveryContainer>
                <Headings>
                    <SubHeading>
                        Está em busca de telantos?
                    </SubHeading>
                    <Heading>
                        Descubra como encontrar
                    </Heading>
                </Headings>
                <Paragraph>
                    <Text>Encontre talentos autênticos! Cadastre-se e encontre os melhores currículos para sua vaga. Faça parte dessa jornada inclusiva e enriqueça sua equipe com profissionais diversificades.</Text>
                </Paragraph>
            </DiscoveryContainer>
        </SectionContainer>
    )
}