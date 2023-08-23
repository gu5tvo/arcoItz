import React from 'react'
import { useAdmin } from '../hooks/contexts';
import DinamicHeader from '../layouts/Header'
import { UserMetadata } from '../features';

export default function AdminCities() {
    const { listCities, cities , deleteCities , registerCities } = useAdmin();

    return (
      <>
        <DinamicHeader logoutBtn adminPanel />
        <UserMetadata 
          pageName="Cidade"
          listMetadata={listCities} 
          Metadata={cities} 
          registerMetadata={registerCities} 
          deleteMetadata={deleteCities}/>
      </>
    )
}