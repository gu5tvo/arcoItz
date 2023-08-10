import React from 'react'
import { Navigation, Selections } from '../style/navigation'

interface Props {
    display: string
    setDisplay: React.Dispatch<React.SetStateAction<string>>
}

interface Selection {
    title: string
    description: string
    value: 'profile' | 'school' | 'experience' | 'skills' | 'certificates' | 'contact'
}

export default function DashboardNavigation({ display, setDisplay }: Props) {

    const items: Selection[] = [
        {
            title: 'Perfil',
            description: 'Nome, foto e dados pessoais',
            value: 'profile'
        },
        {
            title: 'Dados acadêmicos',
            description: 'Cursos, graduações e outros',
            value: 'school'
        },
        {
            title: 'Experiências profissionais',
            description: 'Trabalhos, estágios e afins',
            value: 'experience'
        },
        {
            title: 'Habilidades e competências',
            description: 'Domínios, habilidades e soft skills',
            value: 'skills'
        },
        {
            title: 'Certificações e documentos',
            description: 'Diplomas, certificações e documentos',
            value: 'certificates'
        },
        {
            title: 'Informações de contato',
            description: 'Redes sociais, telefone e etc',
            value: 'contact'
        },
    ]
    
    return (
        <Navigation>
            {items.map(({ description, title, value })=> (
                <Selections 
                    value={value} 
                    key={value}
                    selected={display} 
                    onClick={()=> setDisplay(value)}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                </Selections>
                ))}
        </Navigation>
    )
}