import React from 'react'
import { Navigation, Selections } from '../style'

interface Props {
    display: string
    setDisplay: React.Dispatch<React.SetStateAction<string>>
}

export default function DashboardNavigation({ display, setDisplay }: Props) {

    return (
        <Navigation>
            <Selections value="profile" selected={display} onClick={()=> setDisplay('profile')}>
                <h4>Perfil</h4>
                <p>Nome, foto e dados pessoais</p>
            </Selections>
            <Selections value="school" selected={display} onClick={()=> setDisplay('school')}>
                <h4>Dados acadêmicos</h4>
                <p>Cursos...</p>
            </Selections>
            <Selections value="experience" selected={display} onClick={()=> setDisplay('experience')}>
                <h4>Experiências profissionais</h4>
                <p>Trabalhos, estágios e afins...</p>
            </Selections>
            <Selections value="skills" selected={display} onClick={()=> setDisplay('skills')}>
                <h4>Habilidades e competências</h4>
                <p>Tecnologias, habilidades e softskils...</p>
            </Selections>
            <Selections value="certificates" selected={display} onClick={()=> setDisplay('certificates')}>
                <h4>Certificações e documentos</h4>
                <p>Documentos..</p>
            </Selections>
            <Selections value="contact" selected={display} onClick={()=> setDisplay('contact')}>
                <h4>Contato</h4>
                <p>Redes sociais, telefone e etc...</p>
            </Selections>
        </Navigation>
    )
}