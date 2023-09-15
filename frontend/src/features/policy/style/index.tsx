import styled from 'styled-components'

// <Container>
//   <ColoredBg $color={color}>
//     <h1>{pageTitle}</h1>
//   </ColoredBg>
//   <Content>parser(content)</Content>
// </Container>

/* nomes provisórios

a lógica aqui é que o coloredBg vai se expandir em altura, mas isso não vai empurrar o conteúdo pra baixo pq o Container define a altura máxima dele
const Container = styled.main`
    display: grid;
    grid-template-rows: 500px 1fr;    
`

const ColoredBg = styled.div<{ $bgColor: string }>`

    background-color: ${props => props.$bgColor};
    height: min(900px, 80vh);
    z-index: 100;
`

const MainHeading = styled.h1``
    
const Content = styled.div`
    width: min(80vw, 950px);
    padding: min(5vw, 30px);
`

const LastUpdate = styled.h2``
*/