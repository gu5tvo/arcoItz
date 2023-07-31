//style.ts
import styled from 'styled-components';

export const MainSectionStyle = styled.section`
    display: flex;

    padding: 8vh 5vw;

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 4vh 5vw;
        gap: 1.2rem;
    }
`

export const ButtonCollection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.87rem;

    @media (max-width: 480px) {
        flex-direction: column;
        align-self: center;
        gap: 1.2rem;
    }
`

export const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    gap: 7.2vh;

    @media (max-width: 480px) {
        & > ${ButtonCollection} {
            display: none;
        }
    }
`

export const TextCollection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.9vh;

`


export const ImageSection = styled.section`

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    & > ${ButtonCollection} {
        display: none;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 2.6rem;

        & > ${ButtonCollection} {
            display: flex;
        }
    }
`

export const MainImage = styled.img `
    @media (max-width: 480px) {
        width: 100%;
    }
`


export const Headline = styled.p`
    display: flex;
    color: var(--MODERATE-BLACK);
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.063rem, 3.2vw , 5rem);
    font-weight: bold;
    line-height: 3.75rem;

    @media (max-width: 480px) {
        text-align: center;
        line-height: 2.1rem;
    }

`
export const Subheading = styled.p`
    font-family: Poppins;
    display: flex;
    font-size: clamp(1rem, 1.13vw, 1.3rem);
    color: var(--TEXT-GRAY);
    width: 46ch;
    line-height: 152%;
    text-align: left;

    @media (max-width: 480px) {
        text-align: center;
        width: 90%;
        align-self: center;
    }
    `

export const SignButton = styled.button`
    background-color: var(--PRIMARY-PINK);
    color: var(--WHITE);
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem ;
    font-weight: bold;
    font-size: 0.9rem;
    transition: 0.5s;
    
    &:hover{
        background-color: var(--PRIMARY-PINK-HOVER);
    }
    

    `

export const SearchButton = styled.button`
    background-color: var(--PRIMARY-BLUE);
    color: var(--WHITE);
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem ;
    font-weight: bold;
    font-size: 0.9rem;
    transition: 0.5s;
    
    &:hover{
        background-color: var(--PRIMARY-BLUE-HOVER);
    }
    
    `

export const UploadDiv = styled.div`
    display: inline-flex;
    padding: 1.2rem 0.9rem;
    justify-content: center;
    align-items: center;
    gap: 0.68344rem;
    border-radius: 1.0935rem;
    background: var(--WHITE);
    box-shadow: -3.28px 4.37px 9.84px 0px rgba(0, 0, 0, 0.25);
    gap:0.9rem;
    
    `

export const Text = styled.p`
    font-family: Poppins;
    display: flex;
    font-size: clamp(0.6rem, 0.78vw, 0.9rem);
    color: var(--BLACK);

    `

export const MaranhaoFlagDiv = styled.div`
    display: inline-flex;
    padding: 0 0.4rem;
    border-radius: 0.5rem;
    background: var(--WHITE);
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    `

export const  ResumesCountDiv= styled.div`
    display: flex;
    font-family: Poppins;
    padding: 0.6rem;
    padding-bottom: 0.5rem;
    background: var(--WHITE);
    box-shadow: 0px 4.37px 9.84px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1.0935rem;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    `

export const TextDiv = styled.div`
    font-family: Poppins;
    color: var(--BLACK);
    display: flex;
    flex-direction: column;
    gap: 0.48rem;
    
`

export const TopText = styled.p`
    font-family: Poppins;
    color: var(--BLACK);
    text-align: center;
    font-size: 1.34rem;
`

export const BottomText = styled.p`
    font-family: Poppins;
    color: var(--BLACK);
    text-align: center;
    font-size: clamp(0.6rem, 0.9vw, 0.9rem);
`

export const Image = styled.img`
    display: inline;
`