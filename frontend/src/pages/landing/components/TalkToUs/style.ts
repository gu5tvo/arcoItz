import styled from 'styled-components';

export const MainSectionStyle = styled.section`
    font-family: 'Poppins', 'Inter', sans-serif;
    display: flex;
    padding: min(8vw, 48px);
    background-color: var(--PINK-2);
    justify-content: space-evenly;
    width: min(2200px, 100%);
    flex-wrap: wrap;
    gap: min(60px, 10vw);
`
export const TextCollection = styled.div`
    display: flex;
    flex-direction: column;
    gap: min(3vw, 18px);
    width: min(90%, 350px);

    @media (max-width: 1180px) {
        text-align: center;
        width: 80%;
        align-items: center;
    }
`

export const Headline = styled.h2`
    font-size: 2.3rem;
    font-weight: bold;
    line-height: 3rem;
`

export const SubHeading = styled.p`
    display: flex;
    font-size: 1rem;
    color: var(--MODERATE-BLACK);
    line-height: 1.52rem;
    text-align: justify;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: min(3vw, 18px);
    min-width: 250px;
`

export const Button = styled.button`
    color: var(--WHITE);
    background-color: var(--AQUABLUE);
    border-radius: 0.5rem;
    padding: min(12px, 2vw) min(24px, 4vw);
    border:none;
    font-size: 1.1rem;
    align-self: flex-end;
    font-weight: bold;
    transition: 0.5s;
    
    &:hover{
        background-color: var(--PRIMARY-BLUE-HOVER);
    }

    @media (max-width: 1180px) {
        align-self: center;
    }
`
export const SameLineInputs = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: min(3vw, 18px);
`

export const Input = styled.input`
    flex: 1;
    color: var(--MODERATE-BLACK);
    background-color:  var(--WHITE);
    border-radius: 0.8rem;
    padding: 0.8rem;
    border:none;
    outline: none;
    min-width: 250px;

    &::placeholder{
        font-size: clamp(0.8rem, 1.1vw, 1.3rem);
    } 

      
`