import styled from 'styled-components';

export const DivSpaceStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: min(2vh, 15px);
  margin-bottom: min(2vh, 15px);
`

export const FormStyle = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
    font-size: clamp(1rem, 1.4vw, 1.4rem);

    div{
      display: flex;
      flex-direction: column;
      gap: 0.5vh;
    }

     div > label.label-form {
      margin: 0;
      font-size: 0.8em;
    }

    .phone-input {
      padding: 1em;
      border: none;
      border-radius: 0.5rem;
      background-color: #eee;
      transition: 0.3s all ease-in-out;

      &:focus{
          outline: none;
          background-color: #9AE7F8;
          color: #001C22;
      }
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;

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

export const Label = styled.label`
    margin-top: 0rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    font-weight: bold;
`

export const Input = styled.input`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;

    &:focus{
        outline: none;
        background-color: #9AE7F8;
        color: #001C22;
    }
`

export const TextArea = styled.textarea`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;
    resize: none;
    min-height: miN(70px, 10vh);
    &:focus{
        outline: none;
        background-color: #9AE7F8;
        color: #001C22;
    }
`

export const Button = styled.button`

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

    &:focus{
        outline: none;
        cursor: pointer;
        background-color: #9AE7F8;
        color: #001C22;
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