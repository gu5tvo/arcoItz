export enum ButtonStyle {
    TransparentBg,
    SolidBorder,
    SolidBg
}

export interface ButtonContent {
    textContent: string,
    buttonStyle: ButtonStyle,
    linkPath: string
}
