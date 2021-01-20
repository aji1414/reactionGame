// external libraries and stylesheet
import React, { Component } from "react";

// components
import {LightContainer, LightBulb} from "./Light.styles.jsx";
import TrafficLight from "react-trafficlight";

// redux actions
const Light = () => {
    return(
        <LightContainer>
            <LightBulb />
            <LightBulb />
            <LightBulb />
            <LightBulb />
        </LightContainer>
    );
};

export default Light;