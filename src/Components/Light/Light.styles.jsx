import styled from "styled-components";


export const LightContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    height:80vh;
    width:33vw;

`;

export const LightBulb = styled.div`
    margin: 10px 0;
    border-radius:50%;
    margin: 0 auto;
    background: ${props => props.lightsOn === true ? "red" : "grey"};
    width:12vw;
    height:15vh;

    @media only screen and (max-width:800px){
        width:20vw;
    }

    @media only screen and (min-width:1500px){
        width:10vw;
    }
`;