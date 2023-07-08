import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/contexts';
import { ContainerProfile, UserGradient, UserInfos} from './style';
import { iUserComplete } from '../../interfaces/users';
import DefaultPicture from '../../assets/profile-picture.svg'
import pdfIcon from '../../assets/icon_PDF.svg'

export default function Profile() {
  const { displayProfile } = useUser();
  const { id } = useParams();

  const [user, setUser] = useState<iUserComplete>();

  const [openAccordionList, setOpenAccordionList] = useState<Array<string>>([])
  
  const handleAccordionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string)=> {
    const target = e.target
    console.log(target)
  }

  useEffect(() => {
    async function loadProfile() {
      const response = await displayProfile(id);
      setUser(response);
    }
    loadProfile();
  }, [displayProfile, id]);

  return (
    <ContainerProfile>
      <div className='content'>
        <UserGradient>
          <div className='profile-header'>
            <img src={user?.avatar ? user?.avatar : DefaultPicture } alt={`imagem de ${user?.name}`} />
            <div className='profile-description'>
              <h3>{user?.pronnouns}</h3>
              <hr />
              <div className='profile-info'>
                <h1>{user?.name}</h1>
                <h3>{user?.title}</h3>
              </div>
            </div>
          </div>

          <div className='profile-contact'>
            <h2>Contato</h2>
            <hr />
            <div className='profile-info'>
              <h3>{user?.email}</h3>
              <h3>{user?.number}</h3>
            </div>
          </div>
        </UserGradient>

        <UserInfos>
          <span className="basic-presentation">
            <h1>{user?.name}</h1>
            <p>{user?.title}</p>
          </span>

          <span className="infos-section">
            <h2>Informações pessoais:</h2>
            <hr/>
            <div className='user-bio'>
              <p>Oi</p>
            </div>
          </span>

          <span className="infos-section">
            <h2>Experiência profissional:</h2>
            <hr/>
            <div onClick={(e)=>handleAccordionClick(e, "dasda")} className={`experience ${openAccordionList.includes("dasda") ? "open" : ''}`}>
              <h3>Técnica de Automação Industrial <span>06/2018 — 10/2021</span></h3>
              <span className="wrapper">
                <div className="details">
                  <h4>Companhia: <span>Empresa do Manu</span></h4>
                  <p>Atuei nesta empresa como Técnica em automação industrial e todas as demais da função, eu também pude ter experiências com Automação eletromecânica e etc...</p>
                </div>
              </span>
              <span className="clicker"/>
            </div>                      
                                        
            {
              user?.experiences.map((experience) => (
                <div key={experience.id} className="experience">
                  <h3>{experience.title}</h3>
                  <p>{experience.to}</p>
                  
                </div>
              ))
            }
          </span>

          <span className="infos-section">
            <h2>Formações Acadêmicas:</h2>
            <hr/>
            <div>
              <h3>Técnica de Automação Industrial</h3>
              <p>Atuei nesta empresa como Técnica em automação industrial e todas as demais da função, eu também pude ter experiências com Automação eletromecânica e etc...</p>
              {
                user?.courses.map((course) => (
                  <div key={course.id}>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                  </div>
                ))
              }
            </div>
          </span>
          <span className="infos-section">
            <h2>Habilidades e competências:</h2>
            <hr/>
            <div className='skills'>
              <div className='skill'>Social Media</div>
              <div className='skill'>NodeJS</div>
              <div className='skill'>React.js</div>
              <div className='skill'>Pacote Office Completo</div>
              {
                user?.skills.map((skill) => (
                  <div key={skill.id} className='skill'>
                    <h3>{skill.name}</h3>
                  </div>
                ))
              }
            </div>            
          </span>
          <span className="infos-section">
            <h2>Certificados e documentos:</h2>
            <hr/>
            <div className='documents'>
              <div className='document'>
                <div className='document-text'>
                <h3>Descrição</h3>
                <p>Certificado de conclusão de curso em Segurança do Trabalho</p>
                </div>
                <img src={pdfIcon} alt="" />
              </div>
              <div className='document'>
                <div className='document-text'>
                <h3>Descrição</h3>
                <p>Certificado de conclusão de curso em Segurança do Trabalho</p>
                </div>
                <img src={pdfIcon} alt="" />
              </div>
              {
                user?.documents.map((document) => (
                  <div className='document'>
                    <div className='document-text'>
                      <h3>Descrição</h3>
                      <p>{document.description}</p>
                    </div>
                    <img src={pdfIcon} alt="imagem de um pdf" />
                  </div>
                ))
              }
            </div>
          </span>          
        </UserInfos>
      </div>
    </ContainerProfile>
  )
}