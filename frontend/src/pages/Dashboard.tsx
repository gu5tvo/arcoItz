import React, { useState } from "react";

import { Dashboard, DashboardContent, DashboardNavigation, DashboardContact, DashboardProfile, DashboardAcademics, DashboardSkill, DashboardProfessional, DashboardDocument } from "../features";

export default function UserDashboardPage() {

    const [display, setDisplay] = useState('profile')
    
    function renderDisplay() {
        if(display === 'profile') return <DashboardProfile />
        if(display === 'school') return <DashboardAcademics />
        if(display === 'contact') return <DashboardContact />
        if(display === 'skills') return <DashboardSkill />
        if(display === 'experience') return <DashboardProfessional />
        if(display === 'certificates') return <DashboardDocument />
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