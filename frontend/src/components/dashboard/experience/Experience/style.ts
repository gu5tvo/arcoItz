import { styled } from "styled-components";

export const ExperienceStyle = styled.div`

  margin-top: 1rem;
  width: 98%;
  display: inline-flex;
  flex-direction: column;
  gap: 0.8rem;

  input{
    background-color: #9AE7F8;
    color: #001C22;
    border: none;
    border-radius: 1rem;
    width: 100%;
    height: 3rem;
    padding-left: 0.3rem ;
    transition: 0.4s;
    
    &:focus{
      outline: none;
      background-color: #40C4E0;
    }
  }


  .description {
    background-color: #00b4d8;
    color: #c5eff8;
    width: 100%;
    height: 7.5rem;
    border: none;
    border-radius: 1rem;
    padding: 0.3rem;
    transition: 0.4s;

    &:focus{
      outline: none;
      background-color: #0087A3;
    }
  }
`;
