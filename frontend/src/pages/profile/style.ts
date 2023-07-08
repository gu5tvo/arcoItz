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
    width: min(100%, 2200px);
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
      h1{
        font-size: clamp(1.5rem, 2.5vw, 2rem);
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
  .basic-presentation {
    font-size: clamp(1rem, 1.4vw, 1.4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(10px, 4vh);
    h1 {
      font-size: 1.75em;
      font-weight: bold;
    }

    p {
      font-size: 1em;
      align-self: flex-start;
    }
  }
`