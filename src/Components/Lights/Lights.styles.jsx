import styled from "styled-components";

export const LightsContainer = styled.div`
    position:relative;
    height:90vh;
    width:100vw;
    background:#000000;
    display: ${props => props.gameStart === true ? "block" : "none"};
`;


export const LightsInnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -51%);
    margin:0 auto;
    display:flex;
    width:70vw;
    justify-content:space-between;
`