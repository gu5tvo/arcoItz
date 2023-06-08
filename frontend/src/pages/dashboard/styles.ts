import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`
export const LeftContainer = styled.div`
    width: 420px;
    height: fit-content;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const RightContainer = styled.div`
    width: calc(90% - 420px);
    height: fit-content;
    padding: 2em;
`

export const DisplayContainer = styled.div`
    background-color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    height: fit-content;

    form{
        display: flex;
        flex-direction: column;
        label{
            margin-top: 1.5rem;
        }
    }
`

interface iSelection {
    actual: string;
    selected: string;
}

export const Selections = styled.div<iSelection>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 1rem;
    gap: 1em;
    outline: .5px solid #eee;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.09);
    background-color: ${props => props.actual === props.selected ? '#B9DDFF' : '#fff'};
    transition: 0.3s all ease-in-out;

    h4{
        font-size: 1.5rem;
        font-weight: 600;
    }

    p{
        font-size: 1.2rem;
    }

    &:hover{
        cursor: pointer;
        background-color: ${props => props.actual === props.selected ? '#B9DDFF' : '#D7ECFF'};
    }
`