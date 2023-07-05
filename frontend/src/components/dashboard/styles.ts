import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
    margin-bottom: 1em;
    transition: 0.3s all ease-in-out;
    aspect-ratio: 1;
    &:hover{
        opacity: 0.8;
        scale: 1.1;
    }

    @media (min-width: 768px){
        max-width: 200px;
        max-height: 200px;
    }
`

export const Label = styled.p`
    font-size: 1rem;
    font-weight: 500;
`

export const Input = styled.input`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;
    margin-bottom: 1em;

    &:focus{
        outline: 1px solid #000;
    }
`

export const Button = styled.button`
    margin-top: 1em;
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.5rem;
    background-color: #48A7FF;
    color: #fff;
    transition: 0.3s all ease-in-out;

    &:hover{
        cursor: pointer;
        background-color: #3F8FCC;
    }
`

export const ErrorText = styled.small`
    color: darkred;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    text-align: center;
`

export const Select = styled.select`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;
    margin-bottom: 1em;

    &:focus{
        outline: 1px solid #000;
        cursor: pointer;
    }
`

export const MaskedInput = styled(InputMask)`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;

    &:focus{
        outline: 1px solid #000;
    }
`

export const TextArea = styled.textarea`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;
    margin-bottom: 1em;
    resize: none;

    &:focus{
        outline: 1px solid #000;
    }
`

export const IconsDivStyle = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
    display: inline-flex;
    align-items: center;

    span {
      padding-left: 0.4rem;
      padding-right: 0.4rem;
      display: inline-block;
      opacity: 0;
      overflow: hidden;
      transition:opacity 0.5s;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }

  img.add {
    transition: transform 0.5s;

    &:hover {
      transform: rotate(-90deg);
    }
  }

  img.remove {
    transform: rotate(45deg);
    transition: transform 0.5s;

    &:hover {
      transform: rotate(-135deg);
    }
  }
`;