import styled from 'styled-components'

// ---------- Containers ----------
export const FormContainer = styled.main`
    padding: min(10vh, 50px) min(5vw, 30px);
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.form`
    background-color: #fff;
    padding: min(2rem, 5vw);
    display: flex;
    flex-direction: column;
    width: min(100%, 490px);
    border-radius: min(10px, 2vw);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    font-size: clamp(1em, 2vw, 1.2rem);
    gap: min(20px, 6vh);

`

export const FormField = styled.section`
    display: flex;
    flex-direction: column;
    gap: min(6px, 3vh);
`

export const FormFooter = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(0.4rem, 0.8vh, 0.8rem);
    line-height: clamp(1rem, 2vh, 2.5rem);
    
    .link {
        text-decoration: none;
        color: #48A7FF;
        cursor: pointer;
    }

    span {
        font-size: 0.75em;
    }

    span > span {
        font-size: 1em
    }
`

export const FormSubmit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: min(5px, 2vh) 0;

`
// ---------- Typography ----------

export const PageTitle = styled.h1`
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
`

export const ErrorText = styled.p`
    color: darkred;
    font-size: 0.8rem;
    text-align: center;
`

export const FieldName = styled.label`
    font-size: 0.8rem;
    margin-left: min(10px, 5vw);
`

// ---------- Elements ----------

export const InputElement = styled.input`
    padding: min(3vw, 10px);
    border: none;
    border-radius: min(10px, 3vw);
    background-color: #eee;
    font-size: 0.7rem;
    &:focus{
        outline: 1px solid #000;
    }
`

export const CheckboxElement = styled.input.attrs({ type: 'checkbox', value: 'remember' })`
    
`

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
    border: none;
    padding: min(8px, 2vw);
    border-radius: min(8px, 2vw);
    background-color: #48A7FF;
    color: #fff;
    transition: 0.3s all ease-in-out;
    font-size: 0.9rem;

    &:hover{
        cursor: pointer;
        background-color: #3F8FCC;
    }
`

export const BottomInfos = styled.span`
    text-align: center;
    font-size: 0.75em;
    margin-top: min(8px, 3vh);

    a {
        text-decoration: none;
        color: #48A7FF;
    }
`