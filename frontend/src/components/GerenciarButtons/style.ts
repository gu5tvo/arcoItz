import styled from 'styled-components';

export const Container = styled.div`
  width: 266px;
  height: 100px;

  padding: 20px;

  background: #fff;
  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 15px;
  font-size: 18px;

  span{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`