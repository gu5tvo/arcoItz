import React from "react";
import SectionMeetDiversiTrampo from "./components/MeetDiversiTrampo";
import DinamicHeader from "../../layouts/Header";
import {PinkSection, DisclaimerSection, ActionSection, BlockArticle} from './styles'
import { Link } from "react-router-dom";
import SectionConnectingTalents from "./components/ConnectingTalents";
import Footer from "../../layouts/Footer";
import SectionTalkToUs from "./components/TalkToUs";

export default function LandingPage(): JSX.Element{
    document.title = "Página inicial | DiversiTrampos";
    return (
        <>
            <DinamicHeader loginBtn={true} registerBtn={true} searchBtn={true}/>
            <SectionConnectingTalents />
            <SectionMeetDiversiTrampo />
            <SectionTalkToUs />
            <Footer />
        </>
    )
}