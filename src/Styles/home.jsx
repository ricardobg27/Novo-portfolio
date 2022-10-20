import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 70vh;

  margin-top: 4vh;
  @media only screen and (max-width: 700px) {
    height: 70vh;
  }
`;

export const DivTwo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Playfair+Display&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  

  h1 {
    font-size: 9em;
    width: 50vw;
   
    font-family: 'Playfair Display', sans-serif;
  }


  @media only screen and (max-width: 700px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-top: solid 0.01em;
  h1 {
    font-size: 3.5em;
    width: 90%;
   margin-left: 14vw;
  }


`;

export const DivLogo = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

export const Logo = styled.img`
  width: 5vw;
  margin: 2vh;
  background-color: white;
  border: solid 1px;
  border-radius: 50%;

  @media only screen and (max-width: 700px) {
    width: 15vw;
    margin: 1vh;
    background-color: white;
    border: solid 1px;
    border-radius: 50%;
  }
`;

export const DivInfo = styled.div`
  border: solid white;
  border-radius: 25px;
  padding: 2vh;
  width: 15vw;
  font-size: 1.5em;
  vertical-align: center;
  @media only screen and (max-width: 700px) {
    border: solid 1px white;
    border-radius: 25px;
    padding: 2vh;
    font-size: 1.7em;
    width: 65%;
  }
`;
