import React, { useState } from "react";

import CertificatesScreen from "../components/dashboard/certificates";

import { Dashboard, DashboardContent, DashboardNavigation, DashboardContact, DashboardProfile, DashboardAcademics, DashboardSkill, DashboardProfessional } from "../features";

export default function UserDashboardPage() {

    const [display, setDisplay] = useState('profile')
    
    function renderDisplay() {
        if(display === 'profile') return <DashboardProfile />
        if(display === 'school') return <DashboardAcademics />
        if(display === 'contact') return <DashboardContact />
        if(display === 'skills') return <DashboardSkill />
        if(display === 'experience') return <DashboardProfessional />
        if(display === 'certificates') return <CertificatesScreen />
    }

    return (
        <Dashboard>
            <DashboardNavigation display={display} setDisplay={setDisplay}/>
            <DashboardContent>
                { renderDisplay() }
            </DashboardContent>
        </Dashboard>
    )
}