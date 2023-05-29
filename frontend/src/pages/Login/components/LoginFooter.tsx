import { Link } from 'react-router-dom'
import { FooterContainer } from '../style'
import Modal from '../../../components/Modal/Modal';
import { useUser } from '../../../hooks/contexts';
import { useState } from 'react';
import Button from './Button';
import Input from '../../../components/Input/Input';
import { BorderStyle } from '../../../utils/Input';

import React from 'react'

import { forgotSchema } from '../schemas';
import { Form } from './style';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type InputChange = React.ChangeEvent<HTMLInputElement>
type SubmitForm = React.FormEvent<HTMLFormElement>

function LoginFooter() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState("")
    const { forgotPassword } = useUser()

    const [emailSent, setEmailSent] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(forgotSchema)
    });

    const sendEmail = async (e: SubmitForm)=> {
        
        setEmailSent(true)

        const formFields = { 
            email: email
        }

        const isValid = await forgotSchema.isValid(formFields);

        if (!isValid) return;
    
        await forgotPassword(formFields.email) 
    }
        
    const changeEmail = (e: InputChange)=> { 
        setEmail(e.target.value)
    }

    const toggleModal = ()=> {
        setModalIsOpen(!modalIsOpen)
        setEmailSent(false)
        setEmail("")
    }

    return (
        <FooterContainer>
            <span>Não possui uma conta? <Link to="/registro" className="link">Cadastre-se</Link>.</span>
            <span>Esqueceu sua senha? <span onClick={toggleModal} className="link">Clique aqui</span>.</span>

            <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal}>
                {emailSent ? 
                
                (<h2>Enviamos um e-mail para você. Por favor, aguarde o e-mail e siga as instruções para a recuperação da sua conta.</h2>) 
                
                : 
                
                (<><h2>Esqueceu sua senha?</h2>

                <Form onSubmit={handleSubmit(sendEmail)}>

                    <Input register={register} placeholder="Insira seu e-mail" name={"email"} value={email} onChange={changeEmail} style={BorderStyle.SolidBorder} />
            
                    { errors.email?.message && <p className="error-message"><>{ errors.email.message }</></p>}
                    
                    <Button content="Enviar" type="submit"/>

                </Form></>) }



            </Modal>
            
        </FooterContainer>
    )
}

export default LoginFooter