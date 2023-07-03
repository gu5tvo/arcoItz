import styled from "styled-components";


export const Container = styled.main `
  width: 100vw;
  height: 100vh;
`

export const PainelSection = styled.section `
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .TextPainel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    margin-top: 3rem;

    h4{
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }

    p {
      font-size: 1rem;
    }
  }

`
export const ButtonsContainer = styled.div`
    display: grid;
    column-gap: min(3vw, 30px);
    row-gap: min(6vh, 40px);
    margin-top: 3.5rem;

    grid-template-columns: 1fr;
    

    @media (min-width: 481px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr 1fr;

      :nth-child(4) {
        grid-column: 2 / span 1;
      }
    }
    
  

  
` 