import { ButtonStyle } from '../layouts/Header/ButtonSpecs'

export const HomepageButtons = [
    {
        textContent: "Entrar",
        buttonStyle: ButtonStyle.TransparentBg,
        linkPath: "/login"
    },   
    {
        textContent: "Cadastre-se",
        buttonStyle: ButtonStyle.SolidBorder,
        linkPath: "/register"
    }
]

export const PainelButtons = [
    {
        textContent: "Sair",
        buttonStyle: ButtonStyle.SolidBg,
        linkPath: "/logout"
    }
]


