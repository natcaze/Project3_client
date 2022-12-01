import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #f19169;
  border-radius: 40px;
  border-style: solid;
  color: black;
  border-width: 0.4rem;
  width: 9rem;
  height: 3rem;
align-items: center;
display: inline-flex;
justify-content: center;
flex-direction: row;

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
    font-weight: bold;
  }
`;
