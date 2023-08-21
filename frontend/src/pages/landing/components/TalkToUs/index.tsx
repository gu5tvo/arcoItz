import { Button, Form, Headline, Input, MainSectionStyle, SubHeading, TextCollection } from "./style";

export default function SectionTalkToUs(): JSX.Element {
  return (
    <>
      <MainSectionStyle>
        <TextCollection>
            <Headline>Fale conosco!</Headline>
            <SubHeading>Para tirar qualquer dúvida, solicitar suporte ou enviar sugestões.</SubHeading>
        </TextCollection>
        <Form>
          <Input type="text" placeholder="Nome completo*" />
          <Input type="text" placeholder="Telefone*"/>
          <Input type="email" placeholder="Email*"/>
          <Input type="text" placeholder="Mensagem*"/>

          <Button type="submit">Enviar</Button>
        </Form>
      </MainSectionStyle>
    </>
  );
}


