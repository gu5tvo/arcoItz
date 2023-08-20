import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

export const BasicInfos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
`

const basicInputTemplate = `
    box-sizing: border-box;
    background-color: #9AE7F8;
    color: #001C22;
    border: none;
    border-radius: 1rem;
    transition: 0.4s;
    padding: min(10px, 4vw);
    flex: 1;
    min-width: 240px;

    &:focus{
        outline: none;
        background-color: #40C4E0;
    }
`
export const SelectInfos = styled.select`${basicInputTemplate}`

export const StandardInput = styled.input`${basicInputTemplate}`

export const Date = styled(MaskedInput)<{ $blockInput?: boolean }>`${basicInputTemplate}
    width: 100%;
    pointer-events: ${$props => $props.$blockInput ? 'none' : ''}
`

export const DateInputContainer = styled.span`
    flex: 1;
    min-width: 240px;
`

export const Description = styled.textarea`
    box-sizing: border-box;
    background-color: #00B4D8;
    color: #C5EFF8;
    width: 99%;
    height: 7.5rem;
    border: none;
    border-radius: 1rem;
    padding: min(2rem, 10vw);
    transition: 0.4s;

    &:focus{
        background-color: #0087A3;
        outline: none;
    }
`

export const SubmitButton = styled.button`
    all: unset;
    background-color: #00417D;
    transition: 0.2s linear;
    padding: min(10px, 3vw);
    border-radius: min(20px, 4vw);
    text-align: center;
    color: #fff;
    font-size: clamp(0.8rem, 2vw, 1rem);
    font-weight: bold;
    cursor: pointer;
    width: min(150px, 90vw);
    &:hover {
        filter: invert(1)
    }
`

export const SubmitArea = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: min(20px, 4vw);
    flex-wrap: wrap;

    ${SubmitButton}:nth-child(2) {
        background-color: red;
    }
`
