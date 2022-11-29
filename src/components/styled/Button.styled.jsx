import styled from "styled-components";

export const StyledButton = styled.div`
  background-color: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 0.7rem;
  width: 15vw;
  height: 5vh;
  /* border-color:  ${(props) => (props.primary ? "#D23369" : "#5F8D4E")}; */
  border-color: ${(props) => {
    if (props.primary) {
      return "#D23369";
    } else if (props.secundary) {
      return "#5F8D4E";
    } else {
      return "#FFFFFF";
    }
  }};

  p {
    text-align: center;
  }
`;
