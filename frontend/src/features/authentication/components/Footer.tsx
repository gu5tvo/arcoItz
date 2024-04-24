import { Link } from 'react-router-dom';
import { FormFooter } from '../style';
import Modal from '../../../components/Modal';
import { useUser } from '../../../hooks/contexts';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import Input, { BorderStyle } from '../../../components/Input';
import React from 'react';
import { forgotSchema } from '../../../schemas/login';
import { Form } from '../style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function LoginFooter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { forgotPassword } = useUser();
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(forgotSchema),
  });

  const sendEmail = async ({ email }: { email: string }) => {
    trigger();
    setEmailSent(true);

    // Make sure to use data.email instead of email
    forgotPassword(email);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    setEmailSent(false);
  };

  return (
    <FormFooter>
      <span>
        Não possui uma conta? <Link to="/cadastro" className="link">
          Cadastre-se
        </Link>
        .
      </span>
      <span>
        Esqueceu sua senha?{' '}
        <span onClick={toggleModal} className="link">
          Clique aqui
        </span>
        .
      </span>

      <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal}>
        {emailSent ? (
          <h2>
            Enviamos um e-mail para você. Por favor, aguarde o e-mail e siga as
            instruções para a recuperação da sua conta.
          </h2>
        ) : (
          <>
            <h2>Esqueceu sua senha?</h2>

            <Form onSubmit={handleSubmit(sendEmail)}>
              <Input
                register={register as any}
                placeholder="Insira seu e-mail"
                name="email"
                onChange={() => {}}
                style={BorderStyle.SolidBorder}
              />

              {errors.email?.message && (
                <p className="error-message">{errors.email.message}</p>
              )}

              <Button type="submit">Enviar</Button>
            </Form>
          </>
        )}
      </Modal>
    </FormFooter>
  );
}

export default LoginFooter;
