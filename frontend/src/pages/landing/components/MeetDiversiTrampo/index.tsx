import React from "react";
import {
  BodyText,
  BottomText,
  Headline,
  ImageSection,
  MainImage,
  MainSectionStyle,
  TextSection,
  TopText,
} from "./style";
import SectionImage from "./../../../../assets/section2-image.svg";
import SocialMediaCollection from "../../../../layouts/SocialMediaCollection";


export default function SectionMeetDiversiTrampo(): JSX.Element {
  return (
    <>
      <MainSectionStyle>
        <ImageSection>
          <MainImage src={SectionImage} />
        </ImageSection>
        <TextSection>
          <Headline>
            <TopText>Conheça a</TopText>
            <BottomText>DiversiTrampo</BottomText>
          </Headline>
          <BodyText>
            <MainImage src={SectionImage} />
            DiversiTrampo é uma plataforma desenvolvida para colaborar no campo
            de empregabilidade de população trans e travesti residente no estado
            do Maranhão.
            <br /><br />
            A DiversiTrampo irá funcionar como uma base de
            currículos, onde a comunidade trans poderá criar seu currículo com
            facilidade e organização e as empresas ou poder pública terão acesso
            aos currículos cadastrados para que possam encaminhar para vagas de
            emprego, promovendo assim a inclusão e a diversidade no mercado de
            trabalho no estado do Maranhão.
          </BodyText>
          <SocialMediaCollection />
        </TextSection>
      </MainSectionStyle>
    </>
  );
}


