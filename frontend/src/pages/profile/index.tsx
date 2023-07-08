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
  
  const handleAccordionClick = (id: string)=> {
    openAccordionList.includes(id) ?
      setOpenAccordionList(openAccordionList.filter((el)=> el !== id)) :
      setOpenAccordionList([...openAccordionList, id])

  }

  useEffect(() => {
    async function loadProfile() {
      const response = await displayProfile(id);
      setUser(response);
    }
    loadProfile();
  }, [displayProfile, id]);

  console.log(user)
  
  return (
    <ContainerProfile>
      <div className='content'>
        <UserGradient>
          <div className='profile-header'>
            <img src={user?.avatar ? user?.avatar : DefaultPicture } alt={`imagem de ${user?.name}`} />
            <div className='profile-description'>
              <h3>{user?.pronouns}</h3>
              <hr className="desktop-hr"/>
              <div className='profile-info'>
                <h1>{user?.name}</h1>
                <h3>{user?.title}</h3>
              </div>
            </div>
          </div>
          <hr className="mobile-hr"/>
          <div className='profile-contact'>
            <h2>Contato</h2>
            <hr className="desktop-hr"/>
            <div className='profile-info'>
              <h3>{user?.email}</h3>
              <h3>{user?.phone}</h3>
              { user?.linkedin && <span>{user?.linkedin}</span> } 
              { user?.portfolio && <span>{user?.portfolio}</span> } 
              { user?.instagram && <span>{user?.instagram}</span> } 
              <span>https://github.com/raspincel</span>
              <span>https://github.com/raspincel</span>
              <span>https://github.com/raspincel</span>
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
              <p>{user?.bio}</p>
            </div>
          </span>

          <span className="infos-section">
            <h2>Experiência profissional:</h2>
            <hr/>
            <div className="experience">
              <h3>Técnica de Automação Industrial <span>06/2018 — 10/2021</span></h3>
              <span className={`wrapper ${openAccordionList.includes("dasda") ? 'open' : ''}`}>
                <div className="details">
                  <h4>Companhia: <span>Empresa do Manu</span></h4>
                  <p>Atuei nesta empresa como Técnica em automação industrial e todas as demais da função, eu também pude ter experiências com Automação eletromecânica e etc...</p>
                </div>
              </span>
              <span onClick={()=>handleAccordionClick("dasda")} className="clicker">+</span>
            </div>                      
                                        
            {
              user?.experiences.map((experience) => (
                <div key={experience.id} className="experience">
                <h3>{experience.title}<span>{experience.from} — {experience.to}</span></h3>
                <span className={`wrapper ${openAccordionList.includes(experience.id) ? 'open' : ''}`}>
                  <div className="details">
                    <h4>Companhia: <span>{experience.company}</span></h4>
                    <p>{experience.description}</p>
                  </div>
                  </span>
                  <span onClick={()=>handleAccordionClick(experience.id)} className="clicker">+</span>
                </div>
              ))
            }
          </span>

          <span className="infos-section">
            <h2>Formações Acadêmicas:</h2>
            <hr/>
            <div className="experience">
              <h3>Técnica de Automação Industrial <span>06/2018 — 10/2021</span></h3>
              <span className={`wrapper ${openAccordionList.includes("fafa") ? 'open' : ''}`}>
                <div className="details">
                  <h4>Companhia: <span>Empresa do Manu</span></h4>
                  <p>Atuei nesta empresa como Técnica em automação industrial e todas as demais da função, eu também pude ter experiências com Automação eletromecânica e etc...</p>
                </div>
              </span>
              <span onClick={()=>handleAccordionClick("fafa")} className="clicker">+</span>
            </div>

            {
              user?.courses.map((course) => (
                <div key={course.id} className="course">
                <h3>{course.name}<span>{course.from} — {course.to}</span></h3>
                <span className={`wrapper ${openAccordionList.includes(course.id) ? 'open' : ''}`}>
                  <div className="details">
                    <h4>Instituição: <span>{course.institution}</span></h4>
                    <p>{course.description}</p>
                  </div>
                  </span>
                  <span onClick={()=>handleAccordionClick(course.id)} className="clicker">+</span>
                </div>
              ))
            }
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