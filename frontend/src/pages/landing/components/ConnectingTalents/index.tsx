//index.tsx
import React from "react";
import { Headline, ImageSection, MainSectionStyle, Subheading, TextSection , Image, ButtonCollection, SignButton, SearchButton} from "./style";
import  LandingMainPhoto  from "./../../../../assets/LandingMainPhoto.svg";

export default function SectionConnectingTalents(): JSX.Element{

    return (
        <>
            <MainSectionStyle>
                <TextSection>
                    <Headline>
                        Conectando talentos e empresas inclusivas.
                    </Headline>
                    <Subheading>
                        Encontre talentos diversos para sua empresa ou envie seu currículo para explorar novas oportunidades. 
                        Aqui, oportunidades profissionais encontram a diversidade!
                    </Subheading>
                    <ButtonCollection>
                        <SignButton>
                            Cadastrar Currículo
                        </SignButton>
                        <SearchButton>
                            Buscar talentos
                        </SearchButton>
                    </ButtonCollection>
                </TextSection>
                <ImageSection>
                    <Image src={LandingMainPhoto}/>
                    <ButtonCollection>
                        <SignButton>
                            Cadastrar Currículo
                        </SignButton>
                        <SearchButton>
                            Buscar talentos
                        </SearchButton>
                    </ButtonCollection>
                </ImageSection>
            </MainSectionStyle>
        </>
    )
}