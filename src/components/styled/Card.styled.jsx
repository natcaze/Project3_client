import styled from "styled-components";

export const StyledCard = styled.div`
background-color: ${(props) => (props.primary ? "#676FA3" : "#FF5959")};
border-radius: 10px;
border: none;
height: 40vh;
width: 60vh;
`;