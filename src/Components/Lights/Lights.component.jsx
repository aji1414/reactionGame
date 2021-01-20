// external libraries and stylesheet
import React, { useState, Component } from "react";

// components
import {LightsContainer, LightsInnerContainer} from "./Lights.styles.jsx";
import Light from "../Light/Light.component";
import { faBoxTissue } from "@fortawesome/free-solid-svg-icons";

// redux actions
class Lights extends Component  {

    state={
        lightsState:[false,false,false],
        beginStartSequence: false,
        lightsOut:false
    }

    componentDidMount(){
        this.setState({...this.state, beginStartSequence:true}, 
            () => setInterval(
                () => {
                    if(this.state.lightsState[2] === false){
                        this.lightSequence();
                    }
                    else{
                        console.log("ready to blow");
                        return;
                    }
                }
                ,1500));
    }

    lightSequence = () => {
        const lightToUpdate = this.state.lightsState.findIndex(
            element => element === false
        );

        this.setState({
            ...this.state,
            lightsState: this.state.lightsState.map(
                (light, index) => 
                index === lightToUpdate 
                ?
                light = true
                :
                light 
            )
        })
    };


    render(){
        const {gameStart} = this.props;
        const {lightsState} = this.state;

        return(
        <LightsContainer onClick={this.lightSequence} gameStart={gameStart}>
            <LightsInnerContainer>
                <Light lightsOn={lightsState[0]} />
                <Light lightsOn={lightsState[1]} />
                <Light lightsOn={lightsState[2]} />
            </LightsInnerContainer>
        </LightsContainer>
        );
    }
};

export default Lights;