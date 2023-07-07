import { styled } from "styled-components";

export const CertificatesScreenStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: min(3vw, 20px);

    .major-div{
        display: flex;
        flex-direction: column;
        gap: min(2vw, 10px);
    }

    .file-button{
        width: min(20vw, 200px);
        padding: min(1vw, 8px);
        border: none;
        background-color: #48a7ff;
        color: white;
        border-radius: 10px;
        font-size: clamp(0.7rem, 0.9rem, 1.2rem);

    }
`;

