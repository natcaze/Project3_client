import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 90vw;
  height: 30rem;
  border-radius: 20px;
  margin-top: 2rem;
  margin-left: 1.25rem;
  overflow-y: scroll;
  text-align: center;
  padding-top: 2rem;
  color: #5c434d;

  background-color: ${(props) => {
    if (props.lightBlueColor) {
      return "#E4EFEC";
    } else if (props.greenColor) {
      return "#B6E2A1";
    } else if (props.yellowishColor) {
      return "#FEBE8C";
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

  input {
    border-radius: 20px;
    height: 2rem;
    width: 80vw;
    margin-bottom: 1rem;
    border: none;
  }

  a {
    text-decoration: none;
    color: #5c434d;
    margin-left: 10px;
    font-size: 1rem;
  }

  a:hover,
  .active {
    color: #ea047e;
  }
`;
