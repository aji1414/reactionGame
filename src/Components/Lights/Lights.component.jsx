// external libraries and stylesheet
import React, { Component } from "react";

// components
import {LightsContainer} from "./Lights.styles.jsx";

// redux actions
const Lights = ({gameStart}) => {

    return(
        <LightsContainer gameStart={gameStart}>HELLO</LightsContainer>
    );
};

export default Lights;