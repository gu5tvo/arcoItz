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
  justify-content: space-between;

  &::before {
    border-radius: 50% 50% 0 0;
  }

  .profile-header{
    .profile-description {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      
      hr{
        width: 100%;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h1{
        font-size: clamp(1.5rem, 2.5vw, 1.75rem);
      }
      h3{
        font-size: clamp(1rem, 1vw, 1rem);
        font-weight: 400;
      }
      
      .profile-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }
    }
  } 
  .profile-contact{

    hr{
      width: 100%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    .profile-info{
      display: flex;
      flex-direction: column;
    }
  }

  img {
      aspect-ratio: 1;
      width: 100%;
      object-fit: cover;
      border-radius: 100%;
    }  
`
export const UserInfos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: min(20px, 8vh);
  font-size: clamp(1rem, 1.4vw, 1.4rem);

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
      align-self: flex-start;
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

    .clicker {
      position: absolute;
      top: 0;
      right: 0;
    }

    .clicker:after {
      content: "+";
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

    &:hover > .wrapper {
      grid-template-rows: 1fr;
    }
    
    .wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: 0.15s linear;
    }

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
`