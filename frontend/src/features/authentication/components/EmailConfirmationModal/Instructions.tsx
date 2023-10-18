import React, { Dispatch } from "react";
import * as S from "./../../style";
import MailIcon from "./../../../../assets/mail.svg";
import AuthenticationTemplate from "..";
import { modals } from ".";
import { ArrowRightSvg } from "./Svgs";

const Instructions = ({
  setCurrentModal,
}: {
  setCurrentModal: Dispatch<string>;
}) => {
  return (
    <AuthenticationTemplate handleForm={() => {}}>
      <S.PageTitle>Verificação de Email</S.PageTitle>
      <S.Image src={MailIcon} alt="Mail Icon" width="110px" height="110px" />
      <S.FormField>
        <S.TopInfos>
          Enviamos um código de verificação para o endereço de email fornecido.
          Por favor, verifique a sua caixa de entrada.
        </S.TopInfos>
      </S.FormField>
      <S.FormField>
        <S.BottomInfosSmaller>
          Se você não encontrar o email em sua caixa de entrada, verifique sua
          pasta de spam ou lixo eletrônico. Se precisar de ajuda, entre em
          contato com o nosso suporte.
        </S.BottomInfosSmaller>
      </S.FormField>
      <S.FormField position="end">
        <ArrowRightSvg setCurrentModal={setCurrentModal} />
      </S.FormField>
    </AuthenticationTemplate>
  );
};

export default Instructions;
