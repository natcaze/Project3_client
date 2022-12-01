import styled from "styled-components";

export const StyledOneCard = styled.div`
  width: 20rem;
  height: 55rem;
  border-radius: 20px;
  margin-top: 2rem;
  margin-left: 1.25rem;

  background-color: ${(props) => {
    if (props.lightBlueColor) {
      return "#E4EFEC";
    } else if (props.purpleColor) {
      return "#AB55F7";
    } else if (props.yellowishColor) {
      return "#FCDE59";
    }
  }};

  img {
    width: 18rem;
    height: 20rem;
    border-radius: 20px;
    margin-left: 1rem;
  }

  ul {
    text-align: justify;
    margin: 2rem;
    list-style: none;
    align-items: center;
    color: #5c434d;
  }

  span {
    font-weight: bolder;
  }
`;
