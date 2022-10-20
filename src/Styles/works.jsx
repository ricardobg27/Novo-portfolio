import styled from "styled-components";

export const Work = styled.figure`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 18%;
  left: 10%;

  figure {
    width: 30%;
    height: 40%;
    display: flex;
    justify-content: center;
    border: solid 1px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 700px) {
    border-top: solid 0.5px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: column;
    flex-wrap: wrap;
    position: relative;
    top: 4vh;
    left: 0;
    padding: 2vh;

    figure {
      width: 80%;
      height: 25%;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
