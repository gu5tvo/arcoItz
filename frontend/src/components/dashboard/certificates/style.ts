import styled from "styled-components";

export const CertificatesScreenStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: min(4vw, 20px);
    align-items: center;
    
    .major-div{
        display: flex;
        flex-direction: column;
        gap: min(2vw, 10px);
        align-items: center;
        gap: min(10px, 2vh);
    }

    .file-button{
        min-width: min(20vw, 200px);
        padding: min(2vw, 8px);
        border: none;
        background-color: #48a7ff;
        color: white;
        border-radius: 10px;
        font-size: clamp(0.7rem, 0.9rem, 1.2rem);
        transition: 0.4s;
        
        &:hover{
        background-color: #3F8FCC;
       }
    }
`;

