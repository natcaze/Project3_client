import styled from "styled-components";

export const StyledTitles = styled.h5`
  h5 {
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => {
      if (props.pinkColor) {
        return "pink";
      } else if (props.orangeColor) {
        return "#B93B3B";
      } else if (props.greenColor) {
        return "#579943";
      } else if (props.blueColor) {
        return "#EBB241";
      }
    }};
  }
`;
