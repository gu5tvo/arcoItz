import styled from 'styled-components'

export const GenerateCheckbox = (id: string)=> { 
        return styled.input.attrs({ type: 'checkbox' })`
            appearance: none;
            position: absolute;
            border-radius: 20%;
            position: absolute;
            margin: 0;
            left: clamp(-30px, -1.5vw, -20px);
            top: 50%;
            transform: translateY(-50%);
            height: clamp(0.8rem, 1vw, 1.5rem);
            width: clamp(0.8rem, 1vw, 1.5rem);
            

            background-color: #D9D9D9;
            cursor: pointer;
            transition: 0.15s;

        &:hover {
            background-color: #c9c9c9;
        }

        &:checked {
            background-color: #48A7FF;
        }

        &:checked::before {
            margin: 0;
            content: "";
            position: absolute;
            top: 50%;
            left: 50%; 
            transform: translate(-50%, -50%) rotate(45deg);
            width: 20%;
            height: 40%;
            border: solid white;
            border-width: 0 3px 3px 0;
        }
 
    `
}

export const InputAreaContainer = styled.div`
    margin: 15px 0;

    .h2 {
        font-weight: bold;
    }
`