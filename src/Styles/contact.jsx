import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5vh;

  @media only screen and (max-width: 700px) {
    border-top: solid 0.5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40vw;
  height: 45vh;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90vw;
    height: 50vh;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60vh;
  width: 50vw;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 7vh;

  input {
    height: 4vh;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    color: black;
  }

  @media only screen and (max-width: 700px) {
    height: 10vh;

    input {
      height: 6vh;
      font-size: 1.4em;
      padding: 3px;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 7vh;

  input {
    height: 4vh;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    color: black;
  }

  @media only screen and (max-width: 700px) {
    height: 10vh;

    input {
      height: 6vh;
      font-size: 1.4em;
      padding: 3px;
    }
  }
`;

export const Messenger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 22vh;

  textarea {
    height: 18vh;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    color: black;
  }

  @media only screen and (max-width: 700px) {
    textarea {
      height: 18vh;
      background-color: white;
      border-radius: 10px;
      padding: 8px;
      color: black;
      font-size: 2em;
    }
  }
`;

export const Botton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Btn = styled.input`
  border: solid;
  border-radius: 25px;
  width: 40%;
  align-self: center;
  text-align: center;
  background: black;
  height: 4vh;
  font-size: 1em;

  :hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

  @media only screen and (max-width: 700px) {
    border: solid 0.5px;
    border-radius: 25px;
    width: 70%;
    align-self: center;
    text-align: center;
    background: black;
    height: 5vh;
    font-size: 1.1em;
    margin-top: 2vh;

    :hover {
      background-color: white;
      color: black;
      cursor: pointer;

      font-size: 1em;
    }
  }
`;
