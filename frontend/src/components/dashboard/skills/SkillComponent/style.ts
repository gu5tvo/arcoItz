import styled from "styled-components";

export const SkillComponentStyle = styled.button`
    display: inline-flex;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    font-weight: 700;
    color: #777;

    border-radius: 1.25rem;
    border: 2px solid #B9B9B9;
    background-color: transparent;
    padding: min(7px, 2vw) min(5px, 1vw);

    transition: 0.4s;

    &:hover{
        border: 2px solid red;
        background-color: red;
        color: white;
    }

`