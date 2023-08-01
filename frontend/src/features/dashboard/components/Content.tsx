import React from 'react'
import { DisplayContainer, RightContainer } from "../style";

interface Props {
    children: JSX.Element | JSX.Element[] | string
}

export default function Content({ children }: Props) {


    return (
        <RightContainer>
            <DisplayContainer>
                { children }
            </DisplayContainer>
    </RightContainer>
    )
}