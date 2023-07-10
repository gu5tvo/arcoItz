import React, { useEffect, useRef, useState } from 'react';
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

  const documentsRef = useRef([]);

  useEffect(() => {
    if (user && user.documents) {
      const documentElements = documentsRef.current;
      let maxHeight = 0;

      documentElements.forEach((element) => {
        const height = element.clientHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      documentElements.forEach((element) => {
        element.style.height = `${maxHeight}px`;
      });
    }
  }, [user]);






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
            <h2>Experiências profissionais:</h2>
            <hr/>
                 
                                        
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
            {
              user?.courses.map((course) => {
                
                return <div key={course.id} className="experience">
                  <h3>{course.name}<span>{course.from} { course.to && `— ${course.to}`}</span></h3>
                  <span className={`wrapper ${openAccordionList.includes(course.id) ? 'open' : ''}`}>
                  <div className="details">
                    <h4>Instituição: <span>{course.institution}</span></h4>
                    <p>{course.description}</p>
                  </div>
                  </span>
                  <span onClick={()=>handleAccordionClick(course.id)} className="clicker">+</span>
                </div>
              })
            }
          </span>

          <span className="infos-section">
            <h2>Habilidades e competências:</h2>
            <hr/>
            <div className='skills'>
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

              {
                user?.documents.map((document, index) => (
                  <a href={document.document} target="_blank">
                    <div className='document' ref={(el) => (documentsRef.current[index] = el)}>
                      <div className='document-text'>
                        <h3>{document.name}</h3>
                        <p>{document.description}</p>
                      </div>
                      <img src={pdfIcon} alt="imagem de um pdf" />
                    </div>
                  </a>
                ))
              }
            </div>
          </span>          
        </UserInfos>
      </div>
    </ContainerProfile>
  )
}