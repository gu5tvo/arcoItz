import React from "react";
import { Ref } from 'react-hook-form';

export enum BorderStyle {
    SolidBorder,
    Borderless
}

export interface InputProps {
    placeholder: string,
    type?: string,
    style: BorderStyle,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ref: Ref,
    name: string
}
