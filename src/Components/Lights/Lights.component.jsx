// external libraries and stylesheet
import React, { Component } from "react";

// components
import {LightsContainer, LightsInnerContainer} from "./Lights.styles.jsx";
import Light from "../Light/Light.component";

// redux actions
const Lights = ({gameStart}) => {

    return(
        <LightsContainer gameStart={gameStart}>
            <LightsInnerContainer>
                <Light />
                <Light />
                <Light />
                {/* <Light />
                <Light /> */}
            </LightsInnerContainer>
        </LightsContainer>
    );
};

export default Lights;