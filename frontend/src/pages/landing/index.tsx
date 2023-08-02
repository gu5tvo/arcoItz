import React from "react";
import DinamicHeader from "../../components/header";
import SectionMeetDiversiTrampo from "./components/MeetDiversiTrampo";

export default function LandingPage(): JSX.Element{
    document.title = "Página inicial | DiversiTrampos";
    return (
        <>
            <DinamicHeader loginBtn={true} registerBtn={true} searchBtn={true}/>
            <SectionMeetDiversiTrampo />
        </>
    )
}