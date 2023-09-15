import styled from 'styled-components'

//a lógica aqui é que o coloredBg vai se expandir em altura, mas isso não vai empurrar o conteúdo pra baixo pq o Container define a altura máxima dele
export const PoliciesContainer = styled.main`
    width: 100%;
    display: grid;
    grid-template-rows: 240px 1fr;
    padding-bottom: min(3vw, 30px);

    @media(max-width: 550px) {
        grid-template-rows: 200px 1fr;
    }
`

export const ColoredBg = styled.div<{ $bgColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: min(15vw, 90px) min(3vw, 18px) 0;
    background-color: ${props => props.$bgColor};
    height: 200%;
    width: 100%;
    gap: min(30px, 5vw);
`

export const MainHeading = styled.h1`
    font-size: 2rem;
    color: white;
    font-weight: bold;
`

export const LastUpdate = styled.p`
    font-size: 0.9rem;
    color: white;
    font-weight: bold;
`

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: min(80vw, 950px);
    padding: min(5vw, 30px);
    background-color: white;
    z-index: 100;
    box-shadow: 0px 4px 30px 0 rgba(0, 0, 0, 0.25);
    border-radius: min(4px, 1vw);
    display: flex;
    flex-direction: column;
    gap: min(24px, 4vw);

    p {
        font-size: 1rem;
        line-height: 1.3rem;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: bold;
        line-height: 1.4rem;
    }

    ol {
        list-style-type: decimal;
        list-style-position: inside;
        
        li {
            font-size: 0.9rem;
            line-height: 1.2rem;
        }
    }


`