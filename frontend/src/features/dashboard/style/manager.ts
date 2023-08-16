import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

export const FieldsManagerArea = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`


export const ActionDescription = styled.span`
    opacity: 0;
    overflow: hidden;
    transition: opacity 0.5s;
`

export const ActionButton = styled.button<{ $isRemoveBtn?: boolean }>`
    border: none;
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    gap: min(10px, 3vw);

    &:hover {
        ${ActionDescription} {
            opacity: 1;
        }
    }

    @media (max-width: 600px) {
        flex-direction: ${$props => $props.$isRemoveBtn ? 'row-reverse' : ''};
        
        ${ActionDescription} {
            opacity: 1;
        }
    }
`

const buttonsSize = '25px';

export const AddIcon = styled(AiOutlinePlus)`
    transition: transform 0.5s;
    color: green;

    width: ${buttonsSize};
    height: ${buttonsSize};

    &:hover {
        transform: rotate(-90deg);
    }
`

export const RemoveIcon = styled(AiOutlineClose)`
    transition: transform 0.5s;
    color: red;

    width: ${buttonsSize};
    height: ${buttonsSize};

    &:hover {
        transform: rotate(-135deg);
    }
`