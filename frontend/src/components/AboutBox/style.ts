import styled from "styled-components";
import { Button } from "../Button";

export const Container = styled.div`
  max-width: 280px;
  width: 50%;
  min-height: 240px;
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border: 1px solid var(--BLUE);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .text-box{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    h3{
      font-size: 16px;
      font-weight: 700;
    }

    p{
      font-size: 16px;
    }
  }

  ${Button}{
    height: 40px;

    font-size: 16px;
    font-weight: 700;
  }
`
