import React from 'react'
import * as S from './style';

interface BackgroundComponentProps{
    bgColor?: string
    height?: string
    children: string | JSX.Element
}

export default function BackgroundComponent({bgColor = "pink" , height = "auto", children}: BackgroundComponentProps) {

    return (
    <S.BackgroundComponent bgColor={bgColor} height={height} >
        {children}
    </S.BackgroundComponent>
  );
}

