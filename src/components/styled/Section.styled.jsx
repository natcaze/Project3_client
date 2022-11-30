import styled from "styled-components";

export const StyledSection = styled.section`
  height: 84vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: ${(props) => {
    if (props.pinkColor) {
      return "#F7A4A4";
    } else if (props.orangeColor) {
      return "#FEBE8C";
    } else if (props.yellowColor) {
      return "#FFFBC1";
    } else if (props.redColor) {
      return "#FF9494";
    } else if (props.greenColor) {
      return "#B6E2A1";
    } else if (props.purpleColor) {
      return "#ECC5FB";
    } else if (props.beigeColor) {
      return "#F7ECDE";
    } else if (props.blueColor) {
      return "#B2C8DF";
    } else if (props.salmonColor) {
      return "#FFB3B3";
    } else if (props.sunColor) {
      return "#FFDBA4";
    } else if (props.babyBlueColor) {
      return "#8CC0DE";
    } else if (props.greenPastelColor) {
      return "#E6BA95";
    } else if (props.yellowNeonColor) {
      return "#FFF89A";
    } else if (props.barbiePinkColor) {
      return "#FF87CA";
    }
  }};
`;
