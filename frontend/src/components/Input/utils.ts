import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

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
    name: string,
    register: UseFormRegister<FieldValues>
}