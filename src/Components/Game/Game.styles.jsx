import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const GameContainer = styled.div `
    height:100vh;
    width:100vw;
    color:white;
    cursor:pointer;
`;

export const Lightning = styled(FontAwesomeIcon)`
    color:#d8f008;
    margin: 0 auto;
    margin-top:5vh;
    padding:0;
`

export const GamePreview = styled.div `
    /* display: ${props => props.gameStart === true ? "none" : "flex"}; */
    display:flex;
    /* background:${props => props.gameStart === true ? "green" : "#1c9bd6"}; */
    background:#1c9bd6;
    padding:0 30px;
    height:100%;
    flex-direction:column;
    justify-content:center;
    text-align:center;
`;

export const GameTitle = styled.h1`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:0 auto;
    font-size:3em;
    font-weight:700;
    
`;

export const GameHint = styled.h3`
    margin-top:10vh;
`;