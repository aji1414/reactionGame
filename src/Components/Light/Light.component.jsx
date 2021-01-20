// external libraries and stylesheet
import React, { Component } from "react";

// components
import {LightContainer, LightBulb} from "./Light.styles.jsx";

// redux actions
const Light = ({lightsOn}) => {
    return(
        <LightContainer>
            <LightBulb lightsOn={lightsOn} />
            <LightBulb lightsOn={lightsOn} />
            <LightBulb lightsOn={lightsOn} />
            <LightBulb lightsOn={lightsOn} />
        </LightContainer>
    );
};

export default Light;