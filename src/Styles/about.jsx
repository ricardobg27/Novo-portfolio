import styled from "styled-components";

export const DivAbout = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 20%;
  left: 12.5%;

  p {
    width: 50%;
    font-size: 1.5em;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 3vh;
    left: 0;
    border-top: solid 0.5px;
    p {
      width: 100%;
      font-size: 1.4em;
      padding: 5.5vw;
    }
  }
`;

export const Figure = styled.figure`
  img {
    width: 500px;
    height: 500px;
    margin: 3vh;
    border-radius: 100% 50% 100% 50%;
  }

  @media only screen and (max-width: 700px) {
    img {
      width: 300px;
      height: 300px;
      margin-top: 3vh;
      border-radius: 100%;
    }
  }
`;
