import React from 'react'
import { SectionContainer, OuterCircle, PartnersExhibit, PartnerLogo } from "./style";

export default function KnowHowToFind() {


    return (
        <SectionContainer>
            <PartnersExhibit>
                <OuterCircle>
                    <PartnerLogo src="https://images3.alphacoders.com/131/1314151.jpg" $order={1}/>
                    <PartnerLogo src="https://images3.alphacoders.com/131/1314151.jpg" $order={2}/>
                    <PartnerLogo src="https://images3.alphacoders.com/131/1314151.jpg" $order={3}/>
                </OuterCircle>
            </PartnersExhibit>
        </SectionContainer>
    )
}