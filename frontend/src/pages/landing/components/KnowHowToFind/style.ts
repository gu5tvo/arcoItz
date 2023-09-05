import styled from 'styled-components'

export const SectionContainer = styled.section`
    display: flex;
    width: min(2200px, 100%);
    padding: min(60px, 10vw);
    gap: min(30px, 5vw);
    background-color: #8DD9F0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1099px) {
        flex-direction: column;
        gap: min(60px, 10vw);
    }
`

export const PartnersExhibit = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: min(60px, 10vw);
`

export const OuterCircle = styled.div`
    --size: min(220px, 25vw);

    position: relative;
    width: calc(var(--size) * 2);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #1AC1F4B5;

    display: flex;
    align-items: center;
    justify-content: center;

    `

export const InnerCircle = styled.div`
    --size: min(140px, 15vw);
    
    background-color: #2AA2C7B5;
    position: relative;
    width: calc(var(--size) * 2);
    aspect-ratio: 1;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


// 72° represents one fifth of the unit circle
// it is used to space the images so you can have 5 images perfectly around the circle
const seventyTwoDegrees = 2 * Math.PI / 5

// offset angle so the positions of the images change while they keep evenly spaced
const offsetAngle5s = Math.PI / 3


const fifthAngles = [
    { x: Math.cos(offsetAngle5s), y: Math.sin(offsetAngle5s) },
    { x: Math.cos(seventyTwoDegrees + offsetAngle5s), y: Math.sin(seventyTwoDegrees + offsetAngle5s) },
    { x: Math.cos(2 * seventyTwoDegrees + offsetAngle5s), y: Math.sin(2 * seventyTwoDegrees + offsetAngle5s) },
    { x: Math.cos(3 * seventyTwoDegrees + offsetAngle5s), y: Math.sin(3 * seventyTwoDegrees + offsetAngle5s) },
    { x: Math.cos(4 * seventyTwoDegrees + offsetAngle5s), y: Math.sin(4 * seventyTwoDegrees + offsetAngle5s) }
];


// 120° represents one third of the unit circle
// it is used to space the images so you can have 3 images perfectly around the circle
const hundredTwentyDegrees = 2 * Math.PI / 3

// offset angle so the positions of the images change while they keep evenly spaced
const offsetAngles3s = -Math.PI / 7

const thirdAngles = [
    { x: Math.cos(offsetAngles3s), y: Math.sin(offsetAngles3s) },
    { x: Math.cos(hundredTwentyDegrees + offsetAngles3s), y: Math.sin(hundredTwentyDegrees + offsetAngles3s) },
    { x: Math.cos(2 * hundredTwentyDegrees + offsetAngles3s), y: Math.sin(2 * hundredTwentyDegrees + offsetAngles3s) },
]

const angles = {
    inner: thirdAngles,
    outer: fifthAngles
}

export const PartnerLogo = styled.img<{ $order: number, $layer: 'inner' | 'outer' }>`

    width: min(70px, 7vw);
    aspect-ratio: 1;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;

    --x-offset: calc(${props => angles[props.$layer][props.$order - 1].x} * var(--size));
    --y-offset: calc(${props => angles[props.$layer][props.$order - 1].y} * var(--size));
    transform: translate(calc(var(--x-offset) - 50%), calc(var(--y-offset) - 50%));
    z-index: 1;
`;

export const CompaniesNumber = styled.h3`
    color: white;
    font-size: clamp(30px, 5vw, 60px);
    font-weight: 800;
    z-index: 2;
`

export const InnerCircleDescription = styled.h3`
    color: white;
    font-size: clamp(10px, 2vw, 20px);
    font-weight: bold;
    text-align: center;
`

export const DiscoveryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    min-width: 40%;
    gap: min(30px, 3vh);
` 

export const Headings = styled.span<{ $mobile?: boolean }>`
    
    display: ${props => props.$mobile ? 'none' : 'flex' };
    flex-direction: column;
    gap: min(10px, 1vw);
    width: 100%;

    * {
        text-align: ${props => props.$mobile ? 'center' : 'left'};
    }

    @media (max-width: 1099px) {
        display: ${props => props.$mobile ? 'flex' : 'none' };
    }
`

export const SubHeading = styled.h3`
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
`

export const Heading = styled.h2`
    color: black;
    font-size: 1.7rem;
    font-weight: bold;
    width: 100%;
`

export const Paragraph = styled.span`
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: justify;
    align-self: left;
    width: 100%;
    display: flex;
    
    @media (max-width: 1099px) {
        text-align: center;
        align-self: center;
        align-items: center;
        justify-content: center;
    }
`

export const Text = styled.p`
    width: min(650px, 100%);
`