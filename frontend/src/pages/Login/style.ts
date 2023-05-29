import styled from 'styled-components'

export const CenterFullpage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: min(30%, 60px) 0;
`

export const LoginContainer = styled.div`
    background-color: #fff;
    width: min(450px, 80%);
    min-height: 480px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 0 25px 1px #00000060;
    padding: min(50px, 5vh) 30px;
    border-radius: clamp(10px, 2vw, 20px);

    h1 {
        font-weight: bold;
        font-size: clamp(1.4rem, 2vw, 2rem);
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

export const FooterContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(0.4rem, 0.8vh, 0.8rem);
    line-height: clamp(1rem, 2vh, 2.5rem);

    .link {
        text-decoration: none;
        color: #48A7FF;
        cursor: pointer;
    }
`