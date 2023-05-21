import ReactModal from 'react-modal';
import Input from '../../../components/Input/Input';
import { useUser } from '../../../hooks/contexts';
import { BorderStyle } from '../../../utils/Input';
import Button from './Button';
import { ModalWrapper } from './style';
import { useState } from 'react';

ReactModal.setAppElement('#root');

type EventType = React.ChangeEvent<HTMLInputElement>;

interface ModalProps {
    modalIsOpen: boolean,
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal(props: ModalProps) {
    const { modalIsOpen, setModalIsOpen } = props
    const [ value, setValue ] = useState("")

    const { forgotPassword } = useUser()

    const onForgotPassword = ()=> {
        return forgotPassword(value)
    }

    const onChange = (e: EventType)=> {
        setValue(e.target.value)
    }

    const modalInlineStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            background: 'none',
            minWidth: 'min(400px, 60%)'
        }
    }

    function toggleModal() {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            style={ modalInlineStyle }
            
            onClick={toggleModal}
        >
        <ModalWrapper>
            <h2>Esqueceu sua senha?</h2>
            <Input placeholder="Insira seu e-mail" value={value} onChange={onChange} type="email" style={BorderStyle.SolidBorder}/>
            <Button content="Enviar" onClick={}/>
        </ModalWrapper>
        </ReactModal>
    );
}

export default Modal