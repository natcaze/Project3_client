import styled from "styled-components";

export const StyledFilterOption = styled.div`
  background-color: pink;
  width: 20rem;
  height: 12rem;
  border-radius: 20px;
  margin-top: 2rem;

  h5 {
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    color: ${(props) => {
      if (props.pinkColor) {
        return "#EA047E";
      } else if (props.orangeColor) {
        return "#FF6D28";
      } else if (props.greenColor) {
        return "#3AA579";
      } else if (props.blueColor) {
        return "#3E00FF";
      }
    }};
  }

  label {
    color: #eff5f5;
    font-size: 1rem;
  }

  /*   input[type="checkbox"] {
    -webkit-appearance: none;
    padding: 5px;
    height: 5px;
    width: 5px;
    border: 2px solid green;
  } */
`;
