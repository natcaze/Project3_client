import styled from "styled-components";

export const StyledOneCard = styled.div`
  color: #eff5f5;
  background-color: #ff5757;
  border-radius: 20px;
  border-style: solid;
  border-width: 0.7rem;
  width: 60vw;
  height: 70vh;
  border-color: ${(props) => {
    if (props.pinkColor) {
      return "#EA047E";
    } else if (props.orangeColor) {
      return "#FF6D28";
    } else if (props.yellowColor) {
      return "#FCE700";
    }
  }};

  p {
    text-align: center;
  }

  form {
    display: grid;
    justify-content: center;
    margin-top: 10vh;
    margin-bottom: 5vh;
  }

  input {
    width: 50vw;
    height: 4vh;
    border-radius: 20px;
    border: none;
    margin-top: 5px;
    margin-bottom: 10px;
    background-color: #eff5f5;
  }

  a {
    color: #eff5f5;
    text-decoration: none;
    text-align: center;
  }

  a:hover {
    color: #ea047e;
  }
`;
