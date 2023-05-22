import { Link } from 'react-router-dom'
import { FooterContainer } from '../style'
import Modal from '../../../components/Modal/Modal';
import { useUser } from '../../../hooks/contexts';
import { useState } from 'react';
import Button from './Button';
import Input from '../../../components/Input/Input';
import { BorderStyle } from '../../../utils/Input';

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

    const { register, handleSubmit, formState: { errors }, trigger, reset  } = useForm({
        resolver: yupResolver(forgotSchema)
    });

    const sendEmail = async (e: SubmitForm)=> { 
        e.preventDefault()
        e.stopPropagation() // otherwise, it tries to login

        const formFields = { 
            email: e.target[0].value
        }

        const isValid = await forgotSchema.isValid(formFields)
        
        if (!isValid) return;
        
        reset()
        await forgotPassword(formFields.email) 
    }

    const changeEmail = (e: InputChange)=> { 
        setEmail(e.target.value)
        
    }

    const toggleModal = ()=> {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <FooterContainer>
            <span>Não possui uma conta? <Link to="/registro" className="link">Cadastre-se</Link>.</span>
            <span>Esqueceu sua senha? <span onClick={toggleModal} className="link">Clique aqui</span>.</span>

            <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal}>
                <h2>Esqueceu sua senha?</h2>

                <Form onSubmit={handleSubmit(sendEmail)}>
                    <Input placeholder="Insira seu e-mail" name={"email"} value={email} onChange={changeEmail} style={BorderStyle.SolidBorder} ref={register}/>
            
                    <p className="error-message">{ errors.email && <> { errors.email?.message } </>}</p>
                    <Button content="Enviar" type="submit"/>
                </Form>
            </Modal>
            
        </FooterContainer>
    )
}

export default LoginFooter