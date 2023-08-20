import React from 'react'
import { useAdmin } from '../hooks/contexts';
import DinamicHeader from '../components/Header'
import { UserMetadata } from '../features';

export default function AdminCities() {
    const { listCities, cities , deleteCities , registerCities } = useAdmin();

    return (
      <>
        <DinamicHeader logoutBtn adminPanel />
        <UserMetadata 
          listMetadata={listCities} 
          Metadata={cities} 
          registerMetadata={registerCities} 
          deleteMetadata={deleteCities}/>
      </>
    )
}