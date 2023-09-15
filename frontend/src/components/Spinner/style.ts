import styled from 'styled-components'

export const SpinnerContainer = styled.div`
    width: min(80px, 50vw);
    aspect-ratio: 1;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        object-position: center;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }    
`