import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/contexts';
import { ContainerProfile, UserGradient} from './style';
import { iUserSimple } from '../../interfaces/users';

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
            <img src={user?.avatar} alt={`imagem de ${user?.name}`} />
          <div className='profile-description'>
            <p>{user?.pronnouns}</p>
            <hr />
            <h1>{user?.name}</h1>
            <h3>{user?.area}</h3>
          </div>

        </UserGradient>
      </div>
    </ContainerProfile>
  )
}