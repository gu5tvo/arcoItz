import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Dashboard, DashboardContent, DashboardNavigation, DashboardContact, DashboardProfile, DashboardAcademics, DashboardSkill, DashboardProfessional, DashboardDocument } from "../features";
import { useUser } from "../hooks/contexts";

export default function UserDashboardPage() {

    const [display, setDisplay] = useState('profile')
    const { isAuthenticated } = useUser()
    const navigate = useNavigate()

    function renderDisplay() {
        if(display === 'profile') return <DashboardProfile />
        if(display === 'school') return <DashboardAcademics />
        if(display === 'contact') return <DashboardContact />
        if(display === 'skills') return <DashboardSkill />
        if(display === 'experience') return <DashboardProfessional />
        if(display === 'certificates') return <DashboardDocument />
    }

    useEffect(()=> {
        if (!isAuthenticated) navigate('/login')
    }, [isAuthenticated])

    return (
        <Dashboard>
            <DashboardNavigation display={display} setDisplay={setDisplay}/>
            <DashboardContent>
                { renderDisplay() }
            </DashboardContent>
        </Dashboard>
    )
}