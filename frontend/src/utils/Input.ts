export enum BorderStyle {
    SolidBorder,
    Borderless
}

export interface InputProps {
    placeholder: string,
    type: string,
    style: BorderStyle
}
