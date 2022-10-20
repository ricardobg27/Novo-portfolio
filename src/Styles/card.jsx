import styled from "styled-components";

export const BoxOds = styled.section`
  width: 20%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  img {
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }
`;

export const DivOds = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  width: 50%;
  height: 40%;
  z-index: 10;

  h1 {
    background-color: whitesmoke;
    color: black;
    margin-left: 1vh;
    width: 80%;
  }

  p {
    background-color: whitesmoke;
    color: black;
    margin-left: 2vh;
  }

  @media only screen and (max-width: 700px) {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: whitesmoke;
    width: 85%;
    height: 45%;
    z-index: 10;

    h1 {
      background-color: whitesmoke;
      color: black;
      margin-left: 0vh;
      width: 100%;
      font-size: 1em;
      padding: 2vw;
    }

    p {
      background-color: whitesmoke;
      color: black;
      margin-left: 0vh;
      padding: 2vw;
    }
  }
`;

export const BtnOds = styled.button`
  align-self: center;
  background-color: white;
  width: 10%;
  color: white;
  background-color: black;
  border-radius: 20px;
  height: 3vh;

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 700px) {
    align-self: center;
    background-color: white;
    width: 25%;
    height: 4vh;
    color: white;
    background-color: black;
    border-radius: 20px;
  }
`;
