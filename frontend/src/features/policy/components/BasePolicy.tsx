import React from 'react'

interface Props {
  pageTitle: string
  content: string
  color: string
  lastUpdate: string
}

export default function BasePolicy({ pageTitle, content, color, lastUpdate}: Props) {
  return (
    <>
      {/* nomes provisórios
        <Container>
          <ColoredBg $color={color}>
            <h1>{pageTitle}</h1>
            <LastUpdate>{lastUpdate}</LastUpdate>
          </ColoredBg>
          <Content>parser(content)</Content>
        </Container>


      */}
    </>
  )
}
