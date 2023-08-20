import React, {useState} from "react";
import DynamicHeader from "../../components/header";
import { DisplayContainer, LeftContainer, RightContainer, Selections, Container } from './styles'
import SchoolScreen from "../../components/dashboard/school";
import ProfileScreen from "../../components/dashboard/profile";
import CertificatesScreen from "../../components/dashboard/certificates";
import ContactScreen from "../../components/dashboard/contact";
import ExperienceScreen from "../../components/dashboard/experience";
import SkillsScreen from "../../components/dashboard/skills";

export default function UserDashboardPage(): JSX.Element {

    const [display, setDisplay] = useState('profile')
    
    function renderDisplay() {
        if(display === 'profile') return <ProfileScreen />
        if(display === 'school') return <SchoolScreen />
        if(display === 'contact') return <ContactScreen />
        if(display === 'skills') return <SkillsScreen />
        if(display === 'experience') return <ExperienceScreen />
        if(display === 'certificates') return <CertificatesScreen />
    }

    return (
        <>
            <DynamicHeader startBtn profileBtn logoutBtn onDashboard />
            <Container>
                <LeftContainer>
                    <Selections actual="profile" selected={display} onClick={()=> setDisplay('profile')}>
                        <StyledTitle>Perfil</StyledTitle>
                        <StyledParagraph>Nome, foto e dados pessoais</StyledParagraph>
                    </Selections>
                    <Selections actual="school" selected={display} onClick={()=> setDisplay('school')}>
                        <StyledTitle>Dados acadêmicos</StyledTitle>
                        <StyledParagraph>Cursos...</StyledParagraph>
                    </Selections>
                    <Selections actual="experience" selected={display} onClick={()=> setDisplay('experience')}>
                        <StyledTitle>Experiências profissionais</StyledTitle>
                        <StyledParagraph>Trabalhos, estágios e afins...</StyledParagraph>
                    </Selections>
                    <Selections actual="skills" selected={display} onClick={()=> setDisplay('skills')}>
                        <StyledTitle>Habilidades e competências</StyledTitle>
                        <StyledParagraph>Tecnologias, habilidades e softskils...</StyledParagraph>
                    </Selections>
                    <Selections actual="certificates" selected={display} onClick={()=> setDisplay('certificates')}>
                        <StyledTitle>Certificações e documentos</StyledTitle>
                        <StyledParagraph>Documentos..</StyledParagraph>
                    </Selections>
                    <Selections actual="contact" selected={display} onClick={()=> setDisplay('contact')}>
                        <StyledTitle>Contato</StyledTitle>
                        <StyledParagraph>Redes sociais, telefone e etc...</StyledParagraph>
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