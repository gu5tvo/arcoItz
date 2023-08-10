import styled from 'styled-components'

export const Navigation = styled.nav`
    align-self: flex-start;

    @media (max-width: 1249px) {
        padding: min(2rem, 20px);
        margin-top: min(10vh, 30px);

        width: 100vw;
        display: flex;
        overflow-x: scroll;
        gap: min(50px, 20vw);
        white-space: nowrap;
        & > div {
            min-width: min(300px, 35vw);
        }
    }

    ::hover {
        background-color: #D7ECFF
    }

    @media (max-width: 650px) {
        &::webkit-scrollbar {
            display: none;
        }
    }

    @media (min-width: 1250px) {
        width: 420px;
        height: fit-content;
        display: flex;
        padding: 2rem;
        flex-direction: column;
        gap: 1em;
    }
`

export const Selections = styled.div<{ value: string;
    selected: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 1rem;
    gap: 1em;
    outline: .5px solid #eee;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    background-color: ${props => props.value === props.selected ? '#B9DDFF' : '#fff'};
    transition: 0.3s all ease-in-out;
    
    font-size: clamp(1rem, 2vw, 1.4rem);

    p, h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    h4{
        font-size: 1.5eem;
        font-weight: 600;
    }

    p{
        font-size: 1em;
    }

    &:hover{
        cursor: pointer;
        background-color: ${props => props.value === props.selected ? '#B9DDFF' : '#D7ECFF'};
    }
`