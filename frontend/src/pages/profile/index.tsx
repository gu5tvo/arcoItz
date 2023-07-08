import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/contexts';
import { ContainerProfile, UserGradient, UserInfos} from './style';
import { iUserSimple } from '../../interfaces/users';
import DefaultPicture from '../../assets/profile-picture.svg'

export default function Profile() {
  const { displayProfile } = useUser();
  const { id } = useParams();

  const [user, setUser] = useState<iUserSimple>();

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
            <h1>Super nome</h1>
            <p>Social media</p>
          </span>

          <span>
            <h2>Informações pessoais:</h2>
            <hr/>
            <div>
              <p>Oi</p>
            </div>
          </span>
          <span className="">
            <h2>Experiência profissional:</h2>
            <hr/>
            <div>
              <h3>Técnica de Automação Industrial</h3>
              <p>Atuei nesta empresa como Técnica em automação industrial e todas as demais da função, eu também pude ter experiências com Automação eletromecânica e etc...</p>
            </div>
          </span>
          <span>
            <h2>Formações Acadêmicas:</h2>
            <hr/>
            <div>
              <h3>Técnica de Automação Industrial</h3>
              <p>Atuei nesta empresa como Técnica em automação industrial e todas as demais da função, eu também pude ter experiências com Automação eletromecânica e etc...</p>
            </div>
          </span>
          <span>
            <h2>Habilidades e competências:</h2>
            <hr/>            
            <div>Social Media</div>
            <div>NodeJS</div>
            <div>React.js</div>
            <div>Pacote Office Completo</div>
          </span>

          <span>
            <h2>Certificados e documentos:</h2>
            <hr/>            
            <div>
              <h3>Descrição</h3>
              <p>Certificado de conclusão de curso em Segurança do Trabalho</p>
            </div>
            <div>
              <h3>Descrição</h3>
              <p>Certificado de conclusão de curso em Segurança do Trabalho</p>
            </div>
            <div>
              <h3>Descrição</h3>
              <p>Certificado de conclusão de curso em Segurança do Trabalho</p>
            </div>
            <div>
              <h3>Descrição</h3>
              <p>Certificado de conclusão de curso em Segurança do Trabalho</p>
            </div>
          </span>          
        </UserInfos>
      </div>
    </ContainerProfile>
  )
}