import styled from "styled-components";

export const DocumentComponentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: min(2vh, 10px);
  height: min(11vh, 100px);


  .document-name {
    height: 35%;
    font-size: clamp(0.7rem, 0.85rem, 1rem);
    background-color: #9ae7f8;
    width: 100%;
    border-radius: 5px;
    font-weight: 600;
    padding-left: 2%;
    display: flex;
    align-items: center;
  }

  .description-div {
    height: 70%;
    display: flex;
    align-items: center;
    gap: 2.5%;

    textarea {
      background-color: #00b4d8;
      flex-basis: 78%;
      border: none;
      height: 100%;
      border-radius: 7px;
      color: #C5EFF8;
      transition: 0.4s;

      &:focus{
        outline: none;
        background-color: #0087A3;
      }
    }

    button {
      margin: 0;
      padding: 0;
      background-color: transparent;
      border: none;

    }

    .salve-button {
      font-weight: 600;
      flex-basis: 14%;
      border-radius: 0.625rem;
      background: #48a7ff;
      color: white;
      padding: 7.5px;
      transition: 0.4s;

      &:hover{
        background-color: #00417D;
      }
    }

    img.remove {
      transform: rotate(45deg);
      transition: transform 0.5s;

      &:hover {
        transform: rotate(-135deg);
      }
    }
  }
`;
