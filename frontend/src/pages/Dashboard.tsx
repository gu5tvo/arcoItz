import React, { useState } from "react";

import CertificatesScreen from "../components/dashboard/certificates";
import ExperienceScreen from "../components/dashboard/experience";
import SkillsScreen from "../components/dashboard/skills";

import { DashboardContact, DashboardProfile, DashboardAcademics } from "../features";

import { Dashboard, DashboardContent, DashboardNavigation } from "../features";

export default function UserDashboardPage() {

    const [display, setDisplay] = useState('profile')
    
    function renderDisplay() {
        if(display === 'profile') return <DashboardProfile />
        if(display === 'school') return <DashboardAcademics />
        if(display === 'contact') return <DashboardContact />
        if(display === 'skills') return <SkillsScreen />
        if(display === 'experience') return <ExperienceScreen />
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