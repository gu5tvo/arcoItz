import styled from "styled-components";

export const ContainerProfile = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: #777;
  color: #36393E;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
  }
`

export const UserGradient = styled.div`
  height: 100%;
  width: 370px;
  border-radius: 370px 370px 0 0;
  background: linear-gradient(180deg, #0077B6 0%, #36393E 100%);
  border-style: solid;
  border-width: 10px;
  border-image:linear-gradient(to bottom, #0077B6, rgba(0, 0, 0, 0)) 1 100%;
  padding: 90px 20px 20px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .profile-header{
    .profile-description {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      width: 270px;

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
    width: 270px;

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

  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 100%;
    background-color: #fff;
  }



  
`
