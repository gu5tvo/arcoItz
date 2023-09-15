import React from 'react'
import { ColoredBg, Content, ContentWrapper, LastUpdate, MainHeading, PoliciesContainer } from '../style'
import parser from 'react-html-parser'

interface Props {
  pageTitle: string
  content: string
  color: string
  lastUpdate: string
}

export default function BasePolicy({ pageTitle, content, color, lastUpdate}: Props) {
  return (
    <PoliciesContainer>
      <ColoredBg $bgColor={color}>
        <MainHeading>{pageTitle}</MainHeading>
        <LastUpdate>Data da Última Atualização: {lastUpdate}</LastUpdate>
      </ColoredBg>
      <ContentWrapper>
        <Content>{parser(content)}</Content>
      </ContentWrapper>
    </PoliciesContainer>
  )
}
