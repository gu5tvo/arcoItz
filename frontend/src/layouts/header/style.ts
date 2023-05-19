import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  color: white; 
  border-radius: 10px;
  border: 1px solid white;
  padding: 8px;
  transition: 0.3s;

  &:hover{
    background-color: #fff;
    color: #48A7FF;
  }
`

export const Container = styled.header`
  width: 100vw;
  background-color: #48A7FF;
  min-height: 85px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-end;
  

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 29px;
    gap: 20px;
  }
`