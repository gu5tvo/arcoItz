import { FaInstagram/*, FaTwitter, FaLinkedinIn, FaFacebookF*/ } from 'react-icons/fa';
import { SocialCollectionStyle } from './style';
import React from 'react'

interface SocialMediaProps{
    iconColor: string
}

export default function SocialMediaCollection({ iconColor = 'var(--BLACK)' }:SocialMediaProps){

    return (
      <SocialCollectionStyle>
        <FaInstagram color={iconColor} />
        {/* <FaTwitter color={iconColor} />
        <FaLinkedinIn color={iconColor} />
        <FaFacebookF color={iconColor} /> */}
      </SocialCollectionStyle>
    );
}

SocialMediaCollection.defaultProps = {
    iconColor: "var(--BLACK)",
};
