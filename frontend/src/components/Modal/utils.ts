export const modalStyle = {
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

export interface ModalProps {
    modalIsOpen: boolean,
    toggleModal: ()=> any,
    children: React.ReactNode
}