import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const DocumentComponentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: min(2vh, 10px);
  justify-content: center;
  align-items: center;
`;

export const DocumentName = styled.h3`
    padding: min(10px, 3vw);
    font-size: 0.9rem;
    background-color: #9ae7f8;
    width: 100%;
    border-radius: 5px;
    font-weight: 600;
    padding-left: 2%;
    display: flex;
    align-items: center;
`

export const DocumentDescriptionCard = styled.div`
    display: flex;
    align-items: center;
    gap: min(13px, 3vw);
    width: 100%;

    @media (max-width: 699px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
  }
`

export const DocumentDescription = styled.textarea`
    width: 100%;
    padding: min(10px, 3vw);
    background-color: #00b4d8;
    border: none;
    min-height: fit-content;
    border-radius: 7px;
    color: #C5EFF8;
    transition: 0.4s;
    font-size: clamp(0.7rem, 1vw, 0.9rem);

    &:focus{
        outline: none;
        background-color: #0087A3;
    }
`

export const ActionsWrapper = styled.span`
    display: flex;
    gap: min(10px, 3vw);
    align-items: center;
`

export const SaveButton = styled.button`
    margin: 0;
    border: none;
    font-weight: 600;
    flex-basis: 14%;
    border-radius: 0.625rem;
    background: #48a7ff;
    color: white;
    padding: 1vw;
    transition: 0.4s;

    &:hover{
        background-color: #00417D;
    }
`

export const DeleteIcon = styled(GrClose)`
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: min(22px, 15vw);
    height: min(22px, 15vw);

    * {
        stroke: red;
    }

    transition: transform 0.5s;

    &:hover {
        transform: rotate(-135deg);
    }
`