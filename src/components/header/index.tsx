import React from "react";
import ThemeMode from './theme/index.tsx'
import { Container, Title } from "./styles.tsx";

function Header ({title}) {
    return (
        <Container title = {title}>
        <Title>
            {title}
        </Title>
        <ThemeMode/>
        </Container>
    )
}

export default Header