import styled from "styled-components";

export const SocialCollectionStyle = styled.div`
    display: flex;

    flex-direction: row;
    gap: 1.87rem;
    align-self: center;

    svg {
    width:  clamp(1.1rem, 2vw, 2rem); 
    height:  clamp(1.1rem, 2vw, 2rem);
    }

    @media (max-width: 480px) {
        gap: 1.5rem;
        svg {
            width:  1.6rem;
            height:  1.6rem;
        }
    }
`