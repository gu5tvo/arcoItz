import { Link } from 'react-router-dom'
import { FormFooter } from '../style';
import Modal from '../../../components/Modal';
import { useUser } from '../../../hooks/contexts';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import Input, { BorderStyle } from '../../../components/Input';

import React from 'react'

import { forgotSchema } from '../../../schemas/login';
import { Form } from '../style';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'



type InputChange = React.ChangeEvent<HTMLInputElement>

function LoginFooter() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState("")
    const { forgotPassword } = useUser()

    const [emailSent, setEmailSent] = useState(false);

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(forgotSchema)
    });

    const sendEmail = async (data: { email})=> {
        trigger()
        setEmailSent(true)

    
        await forgotPassword(formFields.email) 
    }
        
    const changeEmail = (e)=> { 
        setEmail(e.target.value)
    }

    const toggleModal = ()=> {
        setModalIsOpen(!modalIsOpen)
        setEmailSent(false)
        setEmail("")
    }

    return (
        <FormFooter>
            <span>Não possui uma conta? <Link to="/register" className="link">Cadastre-se</Link>.</span>
            <span>Esqueceu sua senha? <span onClick={toggleModal} className="link">Clique aqui</span>.</span>

            <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal}>
                {emailSent ? 
                
                (<h2>Enviamos um e-mail para você. Por favor, aguarde o e-mail e siga as instruções para a recuperação da sua conta.</h2>) 
                
                : 
                
                (<><h2>Esqueceu sua senha?</h2>

                <Form onSubmit={handleSubmit(sendEmail)}>

                    <Input register={register} placeholder="Insira seu e-mail" name="email" onChange={()=>{}} style={BorderStyle.SolidBorder} />
            
                    { errors.email?.message && <p className="error-message"><>{ errors.email.message }</></p>}
                    
                    <Button type="submit">Enviar</Button>

                </Form></>) }



            </Modal>
            
        </FormFooter>
    )
}

export default LoginFooter