import styled from 'styled-components'

export const LoginContainer = styled.div`
    background-color: #fff;
    width: min(450px, 80%);
    min-height: 480px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 0 25px 1px #000;
    padding: min(50px, 5vh) 30px;

    h1 {
        font-weight: bold;
        font-size: clamp(0.9rem, 2vw, 2rem);
    }

    h2 {
        margin-bottom: 10px;
    }

    .lembrar-acesso {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-bottom: 15px;
    }   

    .lembrar-acesso > div {
        position: relative;
    }
`