import styled from "styled-components";

export const ContainerProfile = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: #F2F2F2;
  color: #36393E;
  margin-bottom: 36rem;

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`

export const UserGradient = styled.div`
height: 100%;
  width: 370px;
  border-radius: 370px 370px 0 0;
  background: linear-gradient(180deg, #0077B6 0%, #36393E 100%);
  border-style: solid;
  border-width: 10px;
  border-image:linear-gradient(
      to bottom, 
      #0077B6, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
  
  padding: 90px 20px 20px 20px;

  img{
    width: 100%;
    border-radius: 100%;

  }

  
`
