import React, { useState } from "react";

import SchoolScreen from "../components/dashboard/school";
import CertificatesScreen from "../components/dashboard/certificates";
import ContactScreen from "../components/dashboard/contact";
import ExperienceScreen from "../components/dashboard/experience";
import SkillsScreen from "../components/dashboard/skills";

import { DashboardProfile } from "../features";

import { Dashboard, DashboardContent, DashboardNavigation } from "../features";

export default function UserDashboardPage() {

    const [display, setDisplay] = useState('profile')
    
    function renderDisplay() {
        if(display === 'profile') return <DashboardProfile />
        if(display === 'school') return <SchoolScreen />
        if(display === 'contact') return <ContactScreen />
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