import { useForm } from "react-hook-form";
import { Button, Form, Headline, Input, MainSectionStyle, SameLineInputs, SubHeading, TextCollection } from "./style";
import { useLanding } from "../../../../hooks/contexts";

export interface TalkToUsInputs{
  name: string
  phone: string
  email: string
  message: string
}

export default function SectionTalkToUs(): JSX.Element {
  const { register, handleSubmit} = useForm();
  const {sendSuportMessage} = useLanding();

  function sendForm({ name , phone , email, message}: TalkToUsInputs ){
      if( !name || !phone || !email || !message) return;
      
      sendSuportMessage({
        name: name,
        phone: phone, 
        email: email,
        message: message
      })
      console.log({ name , phone , email, message});
  }  


  return (
    <>
      <MainSectionStyle>
        <TextCollection>
            <Headline>Fale conosco!</Headline>
            <SubHeading>Para tirar qualquer dúvida, solicitar suporte ou enviar sugestões.</SubHeading>
        </TextCollection>
        
        <Form onSubmit={handleSubmit(sendForm)}>
          <SameLineInputs>
            <Input type="text" placeholder="Nome completo*" {...register("name")}/>
            <Input type="text" placeholder="Telefone*" {...register("phone")}/>            
          </SameLineInputs>
          <Input type="email" placeholder="Email*" {...register("email")}/>
          <Input type="text" placeholder="Mensagem*" {...register("message")}/>

          <Button type="submit">Enviar</Button>
        </Form>
      </MainSectionStyle>
    </>
  );
}


