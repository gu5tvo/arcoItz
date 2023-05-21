import { Button } from "../Button";
import { Container } from "./style";

interface AboutBoxProps {
  title: string;
  textContent: string;
  textButton: string;
}

export function AboutBox({title, textContent, textButton}: AboutBoxProps) {
  return (
    <Container>
      <div className="text-box">
        <h3>{title}</h3>
        <p>{textContent}</p>
      </div>
      <Button>{textButton}</Button>
    </Container>
  );
}