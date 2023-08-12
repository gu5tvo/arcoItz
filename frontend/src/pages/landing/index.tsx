import React from "react";
import SectionMeetDiversiTrampo from "./components/MeetDiversiTrampo";
import DinamicHeader from "../../components/Header";
import {PinkSection, DisclaimerSection, ActionSection, BlockArticle} from './styles'
import { Link } from "react-router-dom";
import SectionConnectingTalents from "./components/ConnectingTalents";

export default function LandingPage(): JSX.Element{
    document.title = "Página inicial | DiversiTrampos";
    return (
        <>
            <DinamicHeader loginBtn={true} registerBtn={true} searchBtn={true}/>
            <SectionMeetDiversiTrampo />
            <SectionConnectingTalents />
           
        </>
    )
}