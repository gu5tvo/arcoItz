import styled from 'styled-components';

export const MainSectionStyle = styled.section`
    font-family: 'Poppins', 'Inter', sans-serif;
    display: flex;
    padding: 8vh 12vw;
    background-color: var(--PINK-2);
    gap: 4vw;

    @media (max-width: 480px) {
        padding: 4vh 5vw;
        flex-direction: column;
    }

`
export const TextCollection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 3vh;

    @media (max-width: 480px) {
        gap: 1.2rem;
    }

`

export const Headline = styled.div`
    display: flex;
    font-size: clamp(1.063rem, 3.2vw , 5rem);
    font-weight: bold;
    flex-direction: column;
    line-height: 3.753vw;

    @media (max-width: 480px) {
        text-align: center; 
        line-height: 2.1rem;
        font-size: 2.063rem;
    }
`

export const SubHeading = styled.p`
    display: flex;
    font-size: clamp(0.6rem, 1.13vw, 1.3rem);
    color: var(--MODERATE-BLACK);
    width: 25ch;
    line-height: 152%;
    text-align: left;
    text-align: justify;

    @media (max-width: 480px) {
        font-size: 1rem;
        width: 90%;
        text-align: center;
        align-self: center;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1.2;
    gap: 3vh;

    @media (max-width: 480px) {
        gap: 1.2rem;
    }

`

export const Button = styled.button`
    color: var(--WHITE);
    background-color: var(--AQUABLUE);
    border-radius: 0.5rem;
    padding: 0.7rem 1.5rem;
    border:none;
    font-size: clamp(0.9rem, 1.1vw, 1.3rem);
    align-self: flex-end;
    font-weight: 700;
    transition: 0.5s;
    
    &:hover{
        background-color: var(--PRIMARY-BLUE-HOVER);
    }

    @media (max-width: 480px) {
        align-self: center;
    }
`
export const SameLineInputs = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1vw;
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 3vh;
    }

`

export const Input = styled.input`
    flex: 1;
    color: var(--MODERATE-BLACK);
    background-color:  var(--WHITE);
    border-radius: 0.8rem;
    padding: 0.8rem;
    border:none;
    outline: none;
    
    &::placeholder{
        font-size: clamp(0.8rem, 1.1vw, 1.3rem);
    } 

      
`