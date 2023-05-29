import styled from "styled-components";


export const Container = styled.main `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
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
    gap: 0.5rem;
    margin-top: 3rem;

    h4{
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1rem;
    }
  }

`
