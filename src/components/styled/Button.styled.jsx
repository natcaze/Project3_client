import styled from "styled-components";

export const StyledButton = styled.div`
background-color: white;
border-radius: 20px;
border-style: solid;
border-width: 0.7rem;
width: 15vw;
height: 5vh;
border-color:  ${(props) => (props.primary ? "#D23369" : "#5F8D4E")};

p{
    text-align: center;
}
`;