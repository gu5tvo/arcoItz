import styled from 'styled-components';

export const MainSectionStyle = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: min(60px, 10vw);
    background-color: var(--PINK-2);
    width: min(2200px, 100%);
    gap: min(54px, 9vw);

    @media (max-width: 803px) {
        flex-direction: column;
        align-items: center;

        p {
            flex-direction: column;
            align-items: center;
        }
    }
`

export const MainImage = styled.img`
    display: flex;
    width: 100%;
    aspect-ratio: 1;

    @media (max-width: 803px) {
        display: none;
    }
`
export const TextSection = styled.section`
    display: flex;
    flex-direction: column;;
    gap: min(45px, 7.5vw);
    min-width: 300px;
    flex: 1;
`

export const ImageSection = styled.section`
    width: min(41%, 600px);
    justify-content: right;
    align-items: flex-start;

    @media (max-width: 803px) {
        display: none;
    }
`


export const Headline = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 2.3rem;
    font-weight: bold;
    flex-direction: column;
    line-height: 3rem;

    @media (max-width: 803px) {
        
        align-items: center;
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
    font-size: 1.1rem;
    color: var(--MODERATE-BLACK);
    line-height: 1.4rem;
    
    text-align: left;
    text-align: justify;

    & > img {
        display: none;
    }

    @media (max-width: 803px) {
        & > img {
            display: flex;
        }
    }

`