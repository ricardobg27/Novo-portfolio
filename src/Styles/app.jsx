import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Playfair+Display&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    background-color: #000;
    color: white;
  }

`;

export const DivBox = styled.div`
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 700px) {
  
   height: 22vh;
  
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  justify-content: space-evenly;
  
  font-size: 2em;
 

  @media only screen and (max-width: 700px) {
  
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 0vh;
  font-size: 2.5em;
`;
