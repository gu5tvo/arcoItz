import ReactModal from 'react-modal';
import { modalStyle, ModalProps } from './utils';
import { ModalWrapper } from './style';

ReactModal.setAppElement('#root');

function Modal(props: ModalProps) {
    const { modalIsOpen, toggleModal, children } = props

    return (
        <ReactModal isOpen={modalIsOpen} onRequestClose={toggleModal} contentLabel="Modal" style={ modalStyle } onClick={toggleModal}>
            <ModalWrapper>
                <span className="close-icon" onClick={toggleModal}>&#10005;</span>
                { children }            
            </ModalWrapper>
        </ReactModal>
    );
}

export default Modal