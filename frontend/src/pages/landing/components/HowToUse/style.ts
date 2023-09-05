import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'

export const MainContainer = styled.section`
    display: flex;
    padding: min(8vw, 50px);
    background-color: white;
    flex-direction: column;
    gap: min(54px, 9vw);
    width: min(2200px, 100%);

    * {
        font-family: Poppins, 'sans-serif'
    }
`

export const InnerSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: min(30px, 5vw);
`

export const Content = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1099px) {
        gap: min(10vw, 60px);
        flex-direction: column;
    }
`

export const Headings = styled.span`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: min(12px, 2vw);
    font-weight: bold;

    @media (max-width: 1099px) {
        align-self: center;
    }
`

export const SectionHeading = styled.h2`
    font-size: 1.7rem;
`

export const SectionSubHeading = styled.h3`
    color: #00CFFC;
    font-size: 1.4rem;
`

export const ExampleCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: min(50px, 7vw) 0;
    width: min(312px, 51vw);
    box-shadow: -4px 1px 12px 2px #00000040;
    border-radius: min(15px, 5vw);
`

export const Bubble = styled.span`
    position: absolute;
    padding: min(15px, 2.5vw);
    background-color: white;
    border-radius: min(10px, 3vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    &, * { 
        font-size: 0.7rem;
    }

    &:nth-child(1) {
        left: 0;
        top: 30%;
        transform: translate(-65%, -50%);
        box-shadow: 4px 4px 8px 0px #00000040;
    }

    &:nth-child(2) {
        right: 0;
        top: 0;
        transform: translate(40%, -50%);
        box-shadow: -2.6px 3.4px 8px 0px #00000040;


    }

    &:nth-child(3) {
        top: 50%;
        right: -25%;
        transform: translateY(15%);
        box-shadow: -2px 4.7px 8px 0px #00000040;

    }
`

export const ExampleInfos = styled.span`
    display: flex;
    flex-direction: column;
    gap: min(30px, 5vw);
    position: relative;
    margin: min(24px, 4vw) 0;
    text-align: center;
`

export const ProfilePicture = styled.img`
    width: 40%;
    margin-top: min(20px, 2.5vw);
    aspect-ratio: 1;
    border-radius: 50%;
`

export const ExampleName = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
`

export const Pronouns = styled.p`
    font-size: 0.8rem;
    color: #AFB6B8;
`

export const Profession = styled.p`
    font-size: 0.9rem;
`

export const UpdateButton = styled.button`
    all: unset;
    color: white;
    padding: min(10px, 5vw);
    background-color: #1CCAF0;
    margin-top: min(30px, 5vw);
    border-radius: min(10px, 4vw);
    font-size: 1rem;
    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: #3CDAF0;
    }

    &:active {
        background-color: #1C9AF3;
    }
`

export const OuterLoadingBar = styled.span`
    width: 100%;
    height: 4px;
    background-color: #AFB6B8;
    border-radius: 10px;
    position: relative;

    margin-top: min(40px, 6vw);
`

export const InnerLoadingBar = styled.span`
    display: block;
    width: 50%;
    height: 4px;
    background-color: black;
    border-radius: 10px;

    &::before {
        content: '50%'; 
        position: absolute;
        top: -14px;
        right: 0;
        font-size: 0.6rem;
        color: #6F7678;
    }
`

export const BubbleSection = styled.span`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: min(30px, 1vw);
`

export const RightArrow = styled(IoIosArrowForward)``

export const StepsBubble = styled.div`
    position: relative;

    &::before {
        aspect-ratio: 1;
        width: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -15px;
        font-size: 1rem;
        left: -15px;
        background-color: #FFADBB;
        font-weight: bold;
        color: white;
        border-radius: 50%;
        padding: min(10px, 3vw);
        z-index: 2;
    }

    &:nth-child(1) {
        &::before { 
            content: '1'; 
        }
    }

    &:nth-child(2) {
        &::before { 
            content: '2'; 
        }
    }

    &:nth-child(3) {
        &::before { 
            content: '3'; 
        }
    }
`

export const BlueBody = styled.div`
    height: 100%;
    background-color: #00CFFC;
    border-radius: min(10px, 4vw);
    width: min(481px, 88.8vw);
    min-height: 135px;
    position: relative;
    z-index: 1;
    padding: min(15px, 2.5vw);
    gap: min(15px, 2vh);

    display: flex;
    align-items: center;
    flex-direction: column;
`

export const PinkShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: -10px;
    right: -10px;
    border-radius: min(10px, 4vw);
    background-color: #FFE3E8;
    z-index: 0;
`

export const StepHeading = styled.h3`
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
`

export const StepDescription = styled.p`
    color: white;
    font-size: 1rem;
    line-height: 1.2rem;
    text-align: center;
    width: 90%;

    @media (min-width: 1100px) {
        font-size: 0.8rem;
    }
`

export const RegisterButton = styled.button`
    all: unset;
    cursor: pointer;
    padding: min(24px, 4vw);
    color: white;
    background-color: #FFADBB;
    font-size: 1.1rem;
    border-radius: min(20px, 3.6vw);
    font-weight: bold;

    &:hover {
        background-color: #DF8D9B;
    }

    &:active {
        background-color: #BF6D7B;
    }
`