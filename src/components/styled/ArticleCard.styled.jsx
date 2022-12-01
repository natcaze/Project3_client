import styled from "styled-components";

export const StyledArticleCard = styled.div`
  background-color: ${(props) => {
    if (props.pinkishColor) {
      return "#ED57A2";
    } else if (props.purpleColor) {
      return "#AB55F7";
    } else if (props.yellowishColor) {
      return "#FCDE59";
    }
  }};

  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 30px;
  width: 20rem;

  h3 {
    font-size: 25px;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
  }

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 20px;
  }

  p {
    text-align: justify;
    margin: 2rem;
  }

  ul {
    text-align: justify;
    margin: 2rem;
  }
`;
