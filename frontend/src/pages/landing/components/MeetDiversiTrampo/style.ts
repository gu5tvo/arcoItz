import styled from 'styled-components';

export const MainSectionStyle = styled.section`
    display: flex;
    padding: 8vh 5vw 4vh 5vw;
    background-color: var(--PINK-2);
    gap: 4vw;

    @media (max-width: 480px) {
        padding: 4vh 5vw;
    }

`

export const MainImage = styled.img`
    display: flex;
    width: 44vw;

    @media (max-width: 480px) {
        width: 98%;
        margin: 0 auto;
    }
`
export const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 7.2vh;

    & > ${MainImage} {
        display: none;
    }

    @media (max-width: 480px) {
        gap: 2rem;
        & > ${MainImage} {
        display: flex;
        }
    }

`

export const ImageSection = styled.section`
    display: flex;
    flex: 1;
    justify-content: right;
    @media (max-width: 480px) {
        display: none;
    }

`


export const Headline = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
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

export const TopText = styled.p`
    color: var(--WHITE);
`

export const BottomText = styled.p`
    color: var(--MODERATE-BLACK);
`

export const BodyText = styled.p`
    font-family: Poppins;
    display: flex;
    font-size: clamp(0.6rem, 1.13vw, 1.3rem);
    color: var(--MODERATE-BLACK);
    width: 55ch;
    line-height: 152%;
    text-align: left;
    text-align: justify;

    @media (max-width: 480px) {
        font-size: 1rem;
        width: 90%;
        align-self: center;
    }
`