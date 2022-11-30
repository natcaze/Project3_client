import styled from "styled-components";

export const StyledButton = styled.div`
  background-color: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 0.7rem;
  width: 15vw;
  height: 5vh;
  border-color: ${(props) => {
    if (props.pinkColor) {
      return "#EA047E";
    } else if (props.orangeColor) {
      return "#FF6D28";
    } else if (props.yellowColor) {
      return "#FCE700";
    } else if (props.lightBlueColor) {
      return "#00F5FF";
    } else if (props.greenColor) {
      return "#38E54D";
    } else if (props.purpleColor) {
      return "#9900F0";
    } else if (props.redColor) {
      return "#FF1E1E";
    } else if (props.blueColor) {
      return "#3E00FF";
    }
  }};

  p {
    text-align: center;
  }
`;
