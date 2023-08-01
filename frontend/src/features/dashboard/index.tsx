import React from "react";
import { Container } from './style'

interface Props {
    children: JSX.Element | JSX.Element[] | string
}

export default function UserDashboardPage({ children }: Props): JSX.Element {

    return (
        <Container>
                { children }
        </Container>
    )
}