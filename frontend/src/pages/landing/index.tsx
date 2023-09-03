import React from "react";
import SectionMeetDiversiTrampo from "./components/MeetDiversiTrampo";
import DinamicHeader from "../../layouts/Header";
import SectionConnectingTalents from "./components/ConnectingTalents";
import Footer from "../../layouts/Footer";
import SectionTalkToUs from "./components/TalkToUs";
import HowToUse from "./components/HowToUse";
import { MainWrapper } from "./styles";

export default function LandingPage(): JSX.Element{
    document.title = "Página inicial | DiversiTrampos";
    return (
        <>
        <DinamicHeader loginBtn={true} registerBtn={true} searchBtn={true}/>
        <MainWrapper>
            <SectionConnectingTalents />
            <SectionMeetDiversiTrampo />
            <HowToUse/>
            <SectionTalkToUs />
            <Footer />
        </MainWrapper>
        </>
    )
}