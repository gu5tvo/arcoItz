import styled from 'styled-components';
import LinesDesktopSVG from "./../../../../assets/lines-section1-desktop.svg";
import ConnectingTalentsBackground from "./../../../../assets/ConnectingTalentsBackground.svg";
import LinesMobileSVG from "./../../../../assets/lines-section1-mobile.svg";

export const MainSectionContainer = styled.div`
        background-image: url(${ConnectingTalentsBackground});
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 0;
`;

export const MainSectionStyle = styled.section`
    display: flex;
    padding: 8vh min(60px, 5vw);
    position: relative;

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 4vh 5vw;
        gap: 1.2rem;
    }
    
`

export const BackgroundSVG = styled.div`
        background-image: url(${LinesDesktopSVG});  
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 20%;
        left: 42%;
        bottom: 0;
        right: 0;
        z-index: 0;

    @media (max-width: 480px) {
            width: 96%;
            top: 42%;
            left: 4%;
    }
    
`

export const ButtonCollection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.87rem;
    z-index: 2;
    @media (max-width: 480px) {
        flex-direction: column;
        align-self: center;
        gap: 1.2rem;
    }
`

export const TextSection = styled.section`
    z-index: 2;
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
    z-index: 2;
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

export const MainImageCollection = styled.div`
    background-size: cover;
    background-position: center;
    position: relative;
    width: 30vw;

    
    @media (max-width: 480px) {
        width: 94%;
    }
`

export const MainImage = styled.img`
    display: flex;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 30vw;

    @media (max-width: 480px) {
        width: 94%;
        margin: 0 auto;
    }
`


export const Headline = styled.p`
    display: flex;
    color: var(--MODERATE-BLACK);
    font-family: 'Poppins', 'Inter', sans-serif;
    font-size: clamp(1.063rem, 3.2vw , 5rem);
    font-weight: bold;
    line-height: 3.753.2vw;

    @media (max-width: 480px) {
        text-align: center;
        line-height: 2.1rem;
        font-size: 2.063rem;
    }

`
export const Subheading = styled.p`
    font-family: 'Poppins', 'Inter', sans-serif;
    display: flex;
    font-size: clamp(0.6rem, 1.13vw, 1.3rem);
    color: var(--TEXT-GRAY);
    width: 46ch;
    line-height: 152%;
    text-align: left;

    @media (max-width: 480px) {
        font-size: 1rem;
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
    padding: 0.75vw 1vw ;
    font-weight: bold;
    font-size: clamp(0.6rem, 0.9vw, 0.9rem);
    transition: 0.5s;
    
    &:hover{
        background-color: var(--PRIMARY-PINK-HOVER);
    }
    
    @media (max-width: 480px) {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }

    `

export const SearchButton = styled.button`
    background-color: var(--PRIMARY-BLUE);
    color: var(--WHITE);
    border: none;
    border-radius: 0.5rem;
    padding: 0.75vw 1vw ;
    font-weight: bold;
    font-size: clamp(0.6rem, 0.9vw, 0.9rem);
    transition: 0.5s;
    
    &:hover{
        background-color: var(--PRIMARY-BLUE-HOVER);
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.75rem 1rem;
    }

    `

export const UploadDiv = styled.div`
    display: inline-flex;
    padding: 3.74% 2.68%;

    justify-content: center;
    align-items: center;
    gap: 0.68344rem;
    border-radius: 1.0935rem;
    background: var(--WHITE);
    box-shadow: -3.28px 4.37px 9.84px 0px rgba(0, 0, 0, 0.25);
    gap:0.9rem;
    
    position: absolute;
    top: -2%; 
    right: 10%;     
    
    `

export const Text = styled.p`
    font-family: 'Poppins', 'Inter', sans-serif;
    display: flex;
    font-size: clamp(0.6rem, 0.78vw, 0.9rem);
    color: var(--BLACK);

    `

export const MaranhaoFlagDiv = styled.div`
    display: inline-flex;
    border-radius: 0.5rem;
    background: var(--WHITE);
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-content: center;
    
    position: absolute;
    bottom: 1%; 
    right: 12%;   
    

    `

export const  ResumesCountDiv= styled.div`
    display: flex;
    font-family: 'Poppins', 'Inter', sans-serif;
    /* padding: 0.6rem 0.6rem 0.5rem 0.6rem; */
    padding: 1.7% 1.7% 1.6% 1.7%;

    background: var(--WHITE);
    box-shadow: 0px 4.37px 9.84px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.6rem;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
   
    position: absolute;
    bottom: 9%; 
    left: -6%;

    @media (max-width: 480px) {
        padding: 1% 0.9% 1.1% 0.9%;
        gap: 0.2rem;
    }
   `

export const TextDiv = styled.div`
    font-family: 'Poppins', 'Inter', sans-serif;
    color: var(--BLACK);
    display: flex;
    flex-direction: column;
    gap: 0.28vw;
    
`

export const TopText = styled.p`
    font-family: 'Poppins', 'Inter', sans-serif;
    color: var(--BLACK);
    text-align: center;
    font-size: 1.34rem;
    font-size: clamp(0.8rem, 1.3vw, 1.44rem);
    @media (max-width: 480px) {
        font-size: 0.94rem;
    }    
`

export const BottomText = styled.p`
    font-family: 'Poppins', 'Inter', sans-serif;
    color: var(--TEXT-GRAY);
    text-align: center;
    font-size: clamp(0.6rem, 0.9vw, 0.9rem);
    
    @media (max-width: 480px) {
        font-size: 0.6rem;
    }    
`

export const Image = styled.img`
    display: inline;
`

export const FlagImage = styled.img`
    width: 5vw;
    @media (max-width: 480px) {
        width: 3rem;
    }   
`

export const DocImage = styled.img`
    display: inline;
    width: 3.2vw;
    @media (max-width: 480px) {
        width: 32%;
    }   
`
