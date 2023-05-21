import React from "react";

export enum BorderStyle {
    SolidBorder,
    Borderless
}

export interface InputProps {
    placeholder: string,
    type: string,
    style: BorderStyle,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
