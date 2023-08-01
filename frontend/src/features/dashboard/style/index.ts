import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    flex-wrap: wrap;
    gap: min(30px, 5vh);
    padding-top: min(2rem, 10vh);
`
export const Navigation = styled.nav`
    align-self: flex-start;

    @media (max-width: 1249px) {
        padding: min(2rem, 20px);
        margin-top: min(10vh, 30px);

        width: 100vw;
        display: flex;
        overflow-x: scroll;
        gap: min(50px, 20vw);
        white-space: nowrap;
        & > div {
            min-width: min(300px, 35vw);
        }
    }

    ::hover {
        background-color: #D7ECFF
    }

    @media (max-width: 650px) {
        &::webkit-scrollbar {
            display: none;
        }
    }

    @media (min-width: 1250px) {
        width: 420px;
        height: fit-content;
        display: flex;
        padding: 2rem;
        flex-direction: column;
        gap: 1em;
    }
`

export const RightContainer = styled.div`
    width: min(90vw, 800px);
    height: fit-content;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
`

export const DisplayContainer = styled.div`
    background-color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    height: fit-content;

    form{
        display: flex;
        flex-direction: column;
        label{
            margin-top: 1.5rem;
        }
    }
`

interface iSelection {
    value: string;
    selected: string;
}

export const Selections = styled.div<iSelection>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 1rem;
    gap: 1em;
    outline: .5px solid #eee;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    background-color: ${props => props.value === props.selected ? '#B9DDFF' : '#fff'};
    transition: 0.3s all ease-in-out;
    
    font-size: clamp(1rem, 2vw, 1.4rem);

    p, h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    h4{
        font-size: 1.5eem;
        font-weight: 600;
    }

    p{
        font-size: 1em;
    }

    &:hover{
        cursor: pointer;
        background-color: ${props => props.value === props.selected ? '#B9DDFF' : '#D7ECFF'};
    }
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
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    gap: min(10px, 3vw);

    span {
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

export const GraduationStyle = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: min(20px, 8vh);
    align-items: center;
    margin-bottom: min(30px, 15vh);
    
    .inner-div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;

        input, select, .input {
            box-sizing: border-box;
            background-color: #9AE7F8;
            color: #001C22;
            border: none;
            border-radius: 1rem;
            transition: 0.4s;
            padding: min(10px, 4vw);
            flex: 1;
            min-width: 240px;

            &:focus{
                outline: none;
                background-color: #40C4E0;
            }
        }

        .input {
            width: 100%;
        }
        span {
            flex: 1;
            min-width: 240px;
        }

        .lock {
            pointer-events: none;
        }
    }



    .description{
        box-sizing: border-box;
        background-color: #00B4D8;
        color: #C5EFF8;
        width: 99%;
        height: 7.5rem;
        border: none;
        border-radius: 1rem;
        padding: min(2rem, 10vw);
        transition: 0.4s;

        &:focus{
            background-color: #0087A3;
            outline: none;
        }
    }

    .button-area {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: min(20px, 4vw);
        flex-wrap: wrap;

        button:nth-child(2) {
            background-color: red;
        }
    }

    button {
        all: unset;
        background-color: #00417D;
        transition: 0.2s linear;
        padding: min(10px, 3vw);
        border-radius: min(20px, 4vw);
        text-align: center;
        color: #fff;
        font-size: clamp(0.8rem, 2vw, 1rem);
        font-weight: bold;
        cursor: pointer;
        width: min(150px, 90vw);
        &:hover {
            filter: invert(1)
        }
    }
`

export const SchoolScreenStyle = styled.div`
    width: 100%;
    padding: min(1rem, 10vw);
    gap: min(20px, 10vh);
    display: flex;
    align-items: center;
    flex-direction: column;
`;
