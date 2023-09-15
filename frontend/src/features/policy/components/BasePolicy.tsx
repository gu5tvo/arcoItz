import React from 'react'
import { CircleWrapper, ColoredBg, Content, ContentWrapper, LastUpdate, MainHeading, PoliciesContainer, SvgWrapper } from '../style'
import parser from 'react-html-parser'
import SolidCircle from './../../../assets/Ornament 2.svg'
import Triangle from './../../../assets/Ornament 42.svg'
import CirclePointed from './../../../assets/Ornament 5.svg'
import Panel from './../../../assets/Ornament 69.svg'
import Ornament from './../../../assets/Ornament 76.svg'

interface Props {
  pageTitle: string;
  content: string;
  color: string;
  lastUpdate: string;
}

export default function BasePolicy({
  pageTitle,
  content,
  color,
  lastUpdate,
}: Props) {
  return (
    <PoliciesContainer>
      <ColoredBg $bgColor={color}>
        <MainHeading>
          {pageTitle}
          <Svgs/>
        </MainHeading>
        <LastUpdate>Data da Última Atualização: {lastUpdate}</LastUpdate>
       
      </ColoredBg>
      <ContentWrapper>
        <Content>{parser(content)}</Content>
      </ContentWrapper>
      
    </PoliciesContainer>
  );
}

function Svgs() {
  return <>

      <SvgWrapper style={{ top: '120px', left: '-400px' , zIndex: '20'}}>
        <img src={Triangle} alt="Ornament 2" />
      </SvgWrapper>

      <SvgWrapper style={{ top: '120px', left: '-430px' }}>
        <img src={Panel} alt="Ornament 4" />
      </SvgWrapper>

      <CircleWrapper style={{ top: '-70px', left: '900px' }}>
        <img src={SolidCircle} alt="Ornament 1" />
      </CircleWrapper>
      
      <CircleWrapper style={{ top: '-20px', left: '870px' }}>
        <img src={CirclePointed} alt="Ornament 3" />
      </CircleWrapper>

      <CircleWrapper style={{ top: '340px', left: '720px' }}>
        <img src={Ornament} alt="Ornament" />
      </CircleWrapper>
  </>
}
