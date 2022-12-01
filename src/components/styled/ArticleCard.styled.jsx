import styled from "styled-components";

export const StyledArticleCard = styled.div`
  background-color: ${(props) => {
    if (props.pinkishColor) {
      return "#F58D8D";
    } else if (props.greenColor) {
      return "#C2D2BA";
    } else if (props.yellowishColor) {
      return "#EBB231";
    }
  }};

  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 30px;
  width: 90vw;
  /* teste */

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
    color: #5c434d;
    font-size: 0.8rem;
  }

  ul {
    text-align: justify;
    margin: 2rem;
    color: #5c434d;
    font-size: 0.8rem;
  }
`;
