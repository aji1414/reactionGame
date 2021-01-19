import styled from "styled-components";

export const LightsContainer = styled.div`
    height:90vh;
    background:#909092;
    display: ${props => props.gameStart === true ? "block" : "none"};
`;