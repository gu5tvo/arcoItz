import styled from 'styled-components'

export const SectionContainer = styled.section`
    display: flex;
    width: min(2200px, 100%);
    padding: min(30px, 5vw);
`

export const PartnersExhibit = styled.div`
    width: 100%;
`

export const OuterCircle = styled.div`
    --size: min(500px, 90%);

    position: relative;
    width: min(500px, 90%);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: red;
`

export const InnerCircle = styled.div`
    position: relative;
    width: min(500px, 90%);
    aspect-ratio: 1;
    border-radius: 50%;

    --size: min(500px, 90%);
`

const angles = [
    { x: Math.cos(0), y: Math.sin(0) },
    { x: Math.cos(1.25664), y: Math.sin(1.25664) },
    { x: Math.cos(2.51327), y: Math.sin(2.51327) },
    { x: Math.cos(3), y: Math.sin(3) },
    { x: Math.cos(4), y: Math.sin(4) },
]

export const PartnerLogo = styled.img<{ $order: number }>`
    width: min(100px, 20vw);
    aspect-ratio: 1;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;

    &:nth-child(1) {
        --x-offset: calc(${angles[0].x} * var(--size) * 2);
        --y-offset: calc(${angles[0].y} * var(--size) * 2);

        transform: translate(var(--x-offset), var(--y-offset));
    }

    &:nth-child(2) {
        --x-offset: calc(${angles[1].x} * var(--size) * 2);
        --y-offset: calc(${angles[1].y} * var(--size) * 2);

        transform: translate(var(--x-offset), var(--y-offset));
    }

    &:nth-child(3) {
        --x-offset: calc(${angles[2].x} * var(--size) * 2);
        --y-offset: calc(${angles[2].y} * var(--size) * 2);

        transform: translate(var(--x-offset), var(--y-offset));
    }

`;


