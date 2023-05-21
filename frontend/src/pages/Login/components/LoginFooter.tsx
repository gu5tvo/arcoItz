import { Link } from 'react-router-dom'
import { FooterContainer } from '../style'
import Modal from './Modal'
import { useState } from 'react';

function LoginFooter() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = ()=> {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <FooterContainer>
            <span>Não possui uma conta? <Link to="/registro" className="link">Cadastre-se</Link>.</span>
            <span>Esqueceu sua senha? <span onClick={toggleModal} className="link">Clique aqui</span>.</span>
            <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </FooterContainer>
    )
}

export default LoginFooter