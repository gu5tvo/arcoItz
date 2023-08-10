import MaskedInput from 'react-text-mask'
import styled from 'styled-components'

export const Phone = styled(MaskedInput)`
    padding: 1em;
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    transition: 0.3s all ease-in-out;

    &:focus{
        outline: none;
        background-color: #9AE7F8;
        color: #001C22;
    }
`