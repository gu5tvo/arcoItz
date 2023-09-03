import styled from 'styled-components';
import LinesDesktopSVG from "./../../../../assets/lines-section1-desktop.svg";
import ConnectingTalentsBackground from "./../../../../assets/ConnectingTalentsBackground.svg";

export const MainSectionContainer = styled.div`
    background-image: url(${ConnectingTalentsBackground});
    background-size: cover;
    background-repeat: no-repeat;

    width: min(100%, 2200px);
`;

export const MainSectionStyle = styled.div`
    display: flex;
    padding: min(8vw, 48px) min(60px, 10vw);
    position: relative;    
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (max-width: 1099px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: min(50px, 8vw);
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

    @media (max-width: 1099px) {
        width: 96%;
        top: 42%;
        left: 4%;
    }
    
`

export const ButtonCollection = styled.div<{ $mobile?: boolean }>`
    display: ${props => props.$mobile ? 'none' : 'flex'};
    flex-direction: row;
    gap: min(18px, 3vw);
    z-index: 2;
    
    @media (max-width: 1099px) {
        display: ${props => props.$mobile ? 'flex' : 'none'};
        flex-direction: column;
        align-self: center;
    }
`

export const TextSection = styled.section`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: min(7vw, 42px);
    flex: 1;
`

export const TextCollection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: min(24px, 4vw);

    @media (max-width: 1099px) {
        align-items: center;

        h3 {
            width: 80% !important;
            text-align: justify;
        }

        h2 {
            text-align: center;
        }
    }
`

export const ImageSection = styled.section`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(90%, 460px);
    flex-direction: column;
    gap: min(30px, 5vw);
`

export const MainImageCollection = styled.div`
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
`

export const MainImage = styled.img`
    display: flex;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    aspect-ratio: 1;
`

export const Headline = styled.h2`
    display: flex;
    color: var(--MODERATE-BLACK);
    font-family: 'Poppins', 'Inter', sans-serif;
    font-size: 2.3rem;
    font-weight: bold;
    line-height: 2.6rem;
`
export const Subheading = styled.h3`
    font-family: 'Poppins', 'Inter', sans-serif;
    display: flex;
    font-size: 1rem;
    color: var(--TEXT-GRAY);
    text-align: justify;
    width: min(80%, 490px);
`

export const SignButton = styled.button`
    background-color: var(--PRIMARY-PINK);
    color: var(--WHITE);
    border: none;
    border-radius: 0.5rem;
    padding: min(12px, 2vw);
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
    padding: min(12px, 2vw);
    font-weight: bold;
    font-size: 0.9rem;
    transition: 0.5s;
    

    &:hover{
        background-color: var(--PRIMARY-BLUE-HOVER);
    }

`

export const UploadDiv = styled.div`
    display: inline-flex;
    padding: min(4vw, 24px);
    justify-content: center;
    align-items: center;
    border-radius: 1.0935rem;
    background: var(--WHITE);
    box-shadow: -3.28px 4.37px 9.84px 0px rgba(0, 0, 0, 0.25);
    gap: 0.9rem;
    
    position: absolute;
    top: -2%; 
    right: 10%;     
    
`

export const Text = styled.p`
    font-family: 'Poppins', 'Inter', sans-serif;
    display: flex;
    font-size: 0.9rem;
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
`

export const TextDiv = styled.div`
    font-family: 'Poppins', 'Inter', sans-serif;
    color: var(--BLACK);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
`

export const TopText = styled.p`
    font-family: 'Poppins', 'Inter', sans-serif;
    color: var(--BLACK);
    text-align: center;
    font-size: 1.34rem;
    font-size: 1.1rem;
`

export const BottomText = styled.p`
    font-family: 'Poppins', 'Inter', sans-serif;
    color: var(--TEXT-GRAY);
    text-align: center;
    font-size: 0.9rem;
`

export const Image = styled.img`
    display: inline;
`

export const FlagImage = styled.img`
    width: min(12vw, 72px);
`

export const DocImage = styled.img`
    display: inline;
    width: min(3.2vw, 32px);
`
