import styled from "styled-components";

export const StyledCard = styled.div`
background-color: ${(props) => (props.primary ? "#F7A4A4" : "#FFFBC1")};
border-radius: 10px;
border: none;
height: 40vh;
width: 60vh;
`;