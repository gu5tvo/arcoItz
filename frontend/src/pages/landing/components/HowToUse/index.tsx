import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BlueBody, Bubble, BubbleSection, Content, ExampleCard, ExampleInfos, ExampleName, Headings, InnerLoadingBar, InnerSection, MainContainer, OuterLoadingBar, PinkShadow, Profession, ProfilePicture, Pronouns, RegisterButton, RightArrow, SectionHeading, SectionSubHeading, StepDescription, StepHeading, StepsBubble, UpdateButton } from "./style";

export default function HowToUse() {
    const navigate = useNavigate()

    const goToRegisterPage = ()=> {
        navigate('/cadastro')
    }

    return (
        <MainContainer>
            <Headings>
                <SectionSubHeading>É um talento?</SectionSubHeading>
                <SectionHeading>Saiba como se cadastrar</SectionHeading>
            </Headings>
            <Content>
                <InnerSection>
                    <ExampleCard>
                        <Bubble>
                            <BubbleSection>
                                Complete o seu perfil
                                <RightArrow/>
                            </BubbleSection>
                            <OuterLoadingBar>
                                <InnerLoadingBar/>
                            </OuterLoadingBar>
                        </Bubble>
                        <Bubble>
                        <BubbleSection>
                                Faça upload do seu currículo
                                <RightArrow/>
                            </BubbleSection>
                        </Bubble>
                        <Bubble>Adicione a sua bio</Bubble>

                        <ProfilePicture src="https://i0.wp.com/edgeeffects.net/wp-content/uploads/2017/07/messiaen_featured_image.jpg?fit=971%2C708&ssl=1" alt="bird piano"/>

                        <ExampleInfos>
                            <ExampleName>Marcos Vinícius</ExampleName>
                            <Pronouns>elu/delu</Pronouns>
                            <Profession>Desenvolvedor web</Profession>
                        </ExampleInfos>
                        <UpdateButton>Atualizar perfil</UpdateButton>
                    </ExampleCard>
                </InnerSection>

                <InnerSection>
                    <StepsBubble>
                        <BlueBody>
                            <StepHeading>Crie um perfil atraente</StepHeading>
                            <StepDescription>
                                Crie um perfil para chamar de seu! Uma foto profissional e uma breve descrição destacando seus objetivos profissionais tem força!
                            </StepDescription>
                        </BlueBody>
                        <PinkShadow/>
                    </StepsBubble>
                    <StepsBubble>
                        <BlueBody>
                            <StepHeading>Componha seu currículo</StepHeading>
                            <StepDescription>
                                Informações precisas sobre sua formação, experiência profissional e competências, são pontos-chave para um currículo de sucesso!
                            </StepDescription>
                        </BlueBody>
                        <PinkShadow/>
                    </StepsBubble>
                    <StepsBubble>
                        <BlueBody>
                            <StepHeading>Fique de olho!</StepHeading>
                            <StepDescription>
                                Ao ficar por dentro de tudo, você poderá agir rapidamente quando surgir uma vaga interessante e aumentar suas chances de ser contratade.
                            </StepDescription>
                        </BlueBody>
                        <PinkShadow/>
                    </StepsBubble>

                    <RegisterButton type='button' onClick={goToRegisterPage}>Cadastre-se</RegisterButton>
                </InnerSection>
            </Content>
        </MainContainer>
    )
}