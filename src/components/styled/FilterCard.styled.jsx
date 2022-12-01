import styled from "styled-components";

export const StyledFilterCard = styled.div`
  background-color: #f0f4f8;
  width: 75vw;
  height: 75vh;
  border-radius: 20px;
  border-style: solid;
  border-width: 0.7rem;
  border-color: #ff5757;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;

  img {
    display: flex;
    width: 12rem;
    height: 15rem;
    margin-right: auto;
    margin-left: auto;
    border-radius: 30px;
  }

  li {
    font-size: 0.8rem;
    margin-right: 4rem;
    margin-left: 2rem;
  }

  h5 {
    display: flex;
    justify-content: center;
  }
`;
