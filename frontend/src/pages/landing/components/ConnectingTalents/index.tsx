//index.tsx
import React from "react";
import { Text, Image,Headline, ImageSection, MainSectionStyle, Subheading, TextSection , MainImage, ButtonCollection, SignButton, SearchButton, TextCollection, MaranhaoFlagDiv, ResumesCountDiv, UploadDiv, BottomText, TopText, TextDiv} from "./style";
import  LandingMainPhoto  from "./../../../../assets/LandingMainPhoto.svg";
import  RightArrow  from "./../../../../assets/RightArrow.svg";
import  DocIcon  from "./../../../../assets/DocIcon.svg";
import  MaranhaoFlag  from "./../../../../assets/MaranhaoFlag.svg";

export default function SectionConnectingTalents(): JSX.Element{

    return (
        <>
            <MainSectionStyle>
                
                <TextSection>
                    <TextCollection>
                        <Headline>
                            Conectando talentos e empresas inclusivas.
                        </Headline>
                        <Subheading>
                            Encontre talentos diversos para sua empresa ou envie seu currículo para explorar novas oportunidades. 
                            Aqui, oportunidades profissionais encontram a diversidade!
                        </Subheading>
                    </TextCollection>
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
                    <MainImage src={LandingMainPhoto}/>
                       <MaranhaoFlagDiv>
                          <Image src={MaranhaoFlag}/>
                       </MaranhaoFlagDiv>
                       <UploadDiv>
                            <Text>
                                Faça o upload do seu currículo
                            </Text>
                            <Image src={RightArrow}/>
                       </UploadDiv>
                       <ResumesCountDiv>


                            <Image src={DocIcon}/>
       
                            <TextDiv>
                                <TopText>+ 1k </TopText>
                                <BottomText>de currículos</BottomText>
                            </TextDiv>
                       </ResumesCountDiv>
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