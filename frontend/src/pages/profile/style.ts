import styled from "styled-components";

export const ContainerProfile = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #777;
  color: #36393E;

  .content {
    display: grid;
    width: min(100%, 1800px);
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: min(10vh, 30px) min(100px, 10vw);
    padding-bottom: 0;
    grid-template-columns: 250px 1fr;
    gap: min(10vw, 40px);
    background-color: #f0f0f0;
  }

  @media (max-width: 899px) {
    height: auto;  
    .content {
        display: flex;
        flex-direction: column;
        height: auto;
      }
    }
`

export const UserGradient = styled.div`
  background: linear-gradient(180deg, #0077B6 0%, #36393E 100%);
  height: min(100%, 1200px);
  border: double 10px transparent;
  border-radius: 370px 370px 0 0;
  background-origin: border-box;
  background-clip: border-box;
  
  padding: 90px 20px 20px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: min(40px, 20vh);

  &::before {
    border-radius: 50% 50% 0 0;
  }


  hr {
    width: 100%;
    color: white;
    background-color: white;
    border-color: white;
  }

  .profile-header{
    display: flex;
    flex-direction: column;
    gap: min(15px, 5vh);
    position: relative;

    .profile-description {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      

      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h1 {
        font-size: clamp(1.5rem, 2.5vw, 1.75rem);
      }

      h3 {
        font-size: clamp(1rem, 1vw, 1rem);
        font-weight: 400;
      }
    }
      
    .profile-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .profile-contact{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .profile-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: min(15px, 4vh);

      span {
        text-align: center;
        font-size: clamp(0.6rem, 2vw, 0.8rem);
        background-color: #fff;
        color: black;
        padding: min(8px, 2vw);
        border-radius: min(14px, 4vw);
        font-weight: bold;
        width: 100%
      }
    }

    h2 {
      font-size: clamp(0.9rem, 3vw, 1.2rem);
      font-weight: bold;
    }

    h3 {
      text-align: center;
      font-size: clamp(0.7rem, 2vw, 1rem);
    }
  }

  img {
      aspect-ratio: 1;
      width: 100%;
      object-fit: cover;
      border-radius: 100%;
    }


  .mobile-hr {
      display: none;
  }
  @media (max-width: 899px) {
    width: 100vw; 
    height: auto;
    border: none;
    background: none;
    padding-top: 0;
    border-radius: 0;
    color: #222;
    
    .mobile-hr {
      display: block;
    }

    .desktop-hr {
      display: none;
    }
    
    .profile-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    
    .profile-description {
      gap: min(10px, 5vh);
    }
    .profile-info {
      flex-direction: row;
    }

    .profile-contact {

      .profile-info {
        span {
        color: white;
        background-color: gray;
        }
      }
    }

    img {
      width: min(20%, 100px);
    }
  }
`
export const UserInfos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: min(20px, 8vh);
  font-size: clamp(1rem, 1.4vw, 1.4rem);
  padding-bottom: min(15vh, 40px);
  hr {
    width: 100%;
    color: black;
  }

  .user-bio, .experience {
    background-color: #fff;
    width: 100%;
    padding: min(10vw, 40px);
    font-size: 0.9em;
    border-radius: min(20px, 2vw);
  }

  .basic-presentation {
    font-size: clamp(1rem, 1.4vw, 1.4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(10px, 4vh);
    width: 90%;

    h1 {
      font-size: 1.75em;
      font-weight: bold;
    }

    p {
      font-size: 1em;
    }
  }

  .infos-section {
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(15px, 8vh);
    width: 90%;

    h2 {
      font-size: 1.1em;
      font-weight: bold;
    }
  }

  .documents{
    display: flex;
    gap: min(10px, 4vh);
    flex-wrap: wrap;
  }

  .document{
    width: min(100%, 380px);
    border-radius: min(40px, 2vw);
    padding: min(10vw, 2rem);
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .document-text{
      width: min(100%, 220px);
      display: flex;
      flex-direction: column;
      gap: min(10px, 4vh);
      h3{
        font-size: clamp(1rem, 1.4vw, 1.25rem);
      }
      p{
        font-size: clamp(1rem, 1.4vw, 1rem);
        font-weight: 700;
      }
    }
  }

  .skills{
    display: flex;
    flex-wrap: wrap;
    gap :min(10px, 4vh);
  }

  .skill{
    border-radius: min(40px, 2vw);
    padding: min(10vw, 0.5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: clamp(1rem, 1.4vw, 1rem);
    font-weight: 700;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #000;
    text-align: center;
  }
  

  .experience {
    display: grid;
    position: relative;
    background-color: #fff;
    gap: min(6px, 3vh);
    position: relative;

    .details {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: min(6px, 3vh);
    }
    h3 {
      font-size: 1em;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: min(4px, 2vh);

      span {
        font-size: 0.9em;
        font-weight: normal;
        
      }
    }

    h4 {
      font-size: 0.95em;
      font-weight: bold;

      span {
        font-weight: normal
      }
    }

    p {
      text-align: justify;
      line-height: 1.2em;
    }
  }

  .clicker {
      position: absolute;
      top: 0;
      right: 0;
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: #007bff;
      border-bottom-left-radius: 20px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 24px; 
      cursor: pointer;
    }

    .wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: 0.15s linear;
    }

  .open {
    grid-template-rows: 1fr;
  }

  @media (max-width: 899px) {
    .basic-presentation {
      display: none;
    }
    .infos-section {
      .document {
        width: 100%;
      }
    }
  }
`