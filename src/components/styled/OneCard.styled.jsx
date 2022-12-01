import styled from "styled-components";

export const StyledOneCard = styled.div`
  width: 90vw;
  height: 55rem;
  border-radius: 20px;
  margin-top: 2rem;
  margin-left: 1.25rem;
  overflow-y: scroll;
  text-align: center;

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
  }

  ul {
    text-align: justify;
    list-style: none;
    align-items: center;
    color: #5c434d;
    display: flex;
    flex-direction: column;
    padding: 0 1.1rem;
  }

  span {
    font-weight: bolder;
  }
`;
