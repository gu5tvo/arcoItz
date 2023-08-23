import React from 'react'
import { useAdmin } from '../hooks/contexts';
import DinamicHeader from '../layouts/Header'
import { UserMetadata } from '../features';

export default function AdminSectors() {
    const { listSectors, sectors , registerSectors , deleteSectors } = useAdmin();
    
    return (
      <>
        <DinamicHeader logoutBtn adminPanel />
        <UserMetadata
          pageName="Setor"
          listMetadata={listSectors} 
          Metadata={sectors} 
          registerMetadata={registerSectors} 
          deleteMetadata={deleteSectors}/>
      </>
    )
}