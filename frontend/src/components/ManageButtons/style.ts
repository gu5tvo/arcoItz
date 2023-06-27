import styled from 'styled-components';

export const Container = styled.div`
  min-width: min(266px, 30vw);
  height: 100px;

  text-decoration: none;

  padding: min(10px, 5%);

  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 15px;
  
  font-size: clamp(0.8rem, 1.3vw, 1.2rem);

  cursor: pointer;
  transition: 0.15s;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--GRAY);
  }
`