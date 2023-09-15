import InputElement from './style';
import React from 'react'
import { FieldValues, UseFormRegister } from "react-hook-form";

function borderStyle(style: BorderStyle) {
  const stylization = style === BorderStyle.SolidBorder ? '1px solid #000' : '';
  return stylization;
}

export enum BorderStyle {
    SolidBorder,
    Borderless
}

export interface InputProps {
    placeholder: string,
    type?: string,
    style: BorderStyle,
    value?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    register: UseFormRegister<{ email: string }>
}

export default function Input ({ placeholder, type, style, value, onChange, name, register }: InputProps) {

  return (
    <InputElement
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{ border: borderStyle(style) }}
        {...register('email')}
    />
  );
};
