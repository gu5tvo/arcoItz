import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/contexts';
import { ContainerProfile, UserGradient} from './style';
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
      </div>
    </ContainerProfile>
  )
}