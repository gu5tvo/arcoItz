import React, { Dispatch } from "react";
import * as S from "./../../style";
import MailIcon from "./../../../../assets/mail.svg";
import AuthenticationTemplate from "..";
import { modals } from ".";

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
      <S.FormField>
        <ArrowRightSvg setCurrentModal={setCurrentModal} />
      </S.FormField>
    </AuthenticationTemplate>
  );
};

function ArrowRightSvg({
  setCurrentModal,
}: {
  setCurrentModal: Dispatch<string>;
}) {
  return (
    <svg
      onClick={() => setCurrentModal(modals[1])}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right-circle"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="m12 16 4-4-4-4" />
    </svg>
  );
}

export default Instructions;
