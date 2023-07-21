import React, {useState} from "react";
import DinamicHeader from "../../components/header";
import { DisplayContainer, LeftContainer, RightContainer, Selections, Container } from './styles'
import SchoolScreen from "../../components/dashboard/school";
import ProfileScreen from "../../components/dashboard/profile";
import CertificatesScreen from "../../components/dashboard/certificates";
import ContactScreen from "../../components/dashboard/contact";
import ExperienceScreen from "../../components/dashboard/experience";
import SkillsScreen from "../../components/dashboard/skills";

export default function UserDashboardPage(): JSX.Element {

    const [display, setDisplay] = useState('profile')
    function renderDisplay() : JSX.Element{
        if(display === 'profile') return <ProfileScreen />
        if(display === 'school') return <SchoolScreen />
        if(display === 'contact') return <ContactScreen />
        if(display === 'skills') return <SkillsScreen />
        if(display === 'experience') return <ExperienceScreen />
        if(display === 'certificates') return <CertificatesScreen />
    }

    return (
        <>
            <DinamicHeader startBtn profileBtn logoutBtn onDashboard />
            <Container>
                <LeftContainer>
                    <Selections actual="profile" selected={display} onClick={()=> setDisplay('profile')}>
                        <h4>Perfil</h4>
                        <p>Nome, foto e dados pessoais</p>
                    </Selections>
                    <Selections actual="school" selected={display} onClick={()=> setDisplay('school')}>
                        <h4>Dados acadêmicos</h4>
                        <p>Cursos...</p>
                    </Selections>
                    <Selections actual="experience" selected={display} onClick={()=> setDisplay('experience')}>
                        <h4>Experiências profissionais</h4>
                        <p>Trabalhos, estágios e afins...</p>
                    </Selections>
                    <Selections actual="skills" selected={display} onClick={()=> setDisplay('skills')}>
                        <h4>Habilidades e competências</h4>
                        <p>Tecnologias, habilidades e softskils...</p>
                    </Selections>
                    <Selections actual="certificates" selected={display} onClick={()=> setDisplay('certificates')}>
                        <h4>Certificações e documentos</h4>
                        <p>Documentos..</p>
                    </Selections>
                    <Selections actual="contact" selected={display} onClick={()=> setDisplay('contact')}>
                        <h4>Contato</h4>
                        <p>Redes sociais, telefone e etc...</p>
                    </Selections>
                </LeftContainer>
                <RightContainer>
                    <DisplayContainer>
                        {renderDisplay()}
                    </DisplayContainer>
                </RightContainer>
            </Container>
        </>
    )
}