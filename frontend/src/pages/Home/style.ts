import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const CoverSection = styled.section`
  max-height: 419px;
  height: 100%;
  background-color: var(--PINK);

  display: flex;
  align-items: center;
  justify-content: space-around;

  .text-cover{
    max-width: 360px;
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    :last-child{
      margin-top: 1rem;
    }
    
    h1{
      font-size:36px;
      font-weight: 700;
      text-align: center;
      color: var(--BLUE-DARK);
    }
    p{
      text-align: center;
      color: var(--BLUE-DARK);
    }
  }

  .image-cover{
    max-width: 360px;
    width: 50%;
    max-height: 419px;
    height: 100%;
    position: relative;

    img{
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`