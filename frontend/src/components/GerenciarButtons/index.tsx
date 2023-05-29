import { Container } from "./style";

interface GerenciarButtonsProps {
  Color: string;
  Text: string;
}

export function GerenciarButtons({Color ,Text} : GerenciarButtonsProps) {
  return (
    <Container color={Color}>
      <span/>
      {Text}
    </Container>
  )
}