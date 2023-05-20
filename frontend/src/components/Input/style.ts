import { styled } from 'styled-components'

const InputElement = styled.input`
    background-color: var(--GRAY);
    min-height: 40px;
    min-width: 330px;
    box-sizing: border-box;
    padding: 10px 15px;
    font-size: clamp(0.8rem, 1.1vw, 1.8rem);
    border-radius: 10px;
`

export default InputElement