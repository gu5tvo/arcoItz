import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 120vh;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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

export const ContentSection = styled.section`
  max-height:295px;
  height: 100%;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .text-content{
    max-width: 360px;
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h2{
      font-size: 24px;
      font-weight: 700;
    }

    h4{
      font-size: 16px;

    }
  }

`

export const AboutSection = styled.section`
  max-height: 360px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .about-box{
    width: 1136px;

    display: flex;
    justify-content: space-around;
  }
`