import styled from "styled-components";

export const StyledCard = styled.div`
background-color: ${(props) => (props.primary ? "#F7A4A4" : "#FFFBC1")};
border-radius: 10px;
border: none;
height: 80vh;
width: 60vh;
font-size: 0.7rem;

img{
    width: 15vw;
    height: 30vh;
}

div{
    display: flex;
    align-items: center;
}

`;