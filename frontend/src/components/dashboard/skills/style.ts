import styled from "styled-components";

export const SkillsScreenStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: min(20px, 4vh);
    
    .major-div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: min(20px, 10vh);
        width: 100%;
    }

    span {
      width: 100%;
      position: relative;
    }

    input{
      box-sizing: border-box;
      width: 100%;
      padding: min(3vw, 12px);
      background-color: #00b4d8;
      border: none;
      border-radius: 7px;
      color: #C5EFF8;
      transition: 0.4s;
      font-size: clamp(0.7rem, 1vw, 0.9rem);
      position: relative;  
    
      ::placeholder{
        color: #C5EFF8;
      }

      &:focus{
        outline: none;
        background-color: #0087A3;
      }
    }

    .tick-btn {
      all: unset;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      color: #b6d822;
      font-weight: bold;
      font-size: clamp(1.4rem, 3vw, 1.7rem);
      transition: 0.2s linear;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
`;

export const SkillComponentCollection = styled.div`
    display: flex;
    gap: min(15px, 4vw);
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`