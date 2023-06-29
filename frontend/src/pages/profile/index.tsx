import React from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/contexts';
import { ContainerProfile, UserGradient} from './style';

export default function Profile() {
  const { usersList } = useUser();
  const { id } = useParams<{ id: string }>();

  const user = usersList.find((user) => user.id === id);

  return (
    <ContainerProfile>
      <h1>Profile</h1>
      <div className='content'>
        <UserGradient>
          <img src={user?.avatar} alt={user?.name} />
          <p>{user.pronnouns}</p>
          <h1>{user?.name}</h1>

        </UserGradient>
      </div>
    </ContainerProfile>
  )
}