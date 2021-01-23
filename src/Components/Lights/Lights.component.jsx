// external libraries and stylesheet
import React, { useState, Component } from "react";

// components
import {LightsContainer, LightsInnerContainer} from "./Lights.styles.jsx";
import Light from "../Light/Light.component";
import { faBoxTissue } from "@fortawesome/free-solid-svg-icons";
import performance from "performance-now";

// redux actions
class Lights extends Component  {

    state={
        lightsState:[true,true,false],
        beginStartSequence: false,
        lightsOut:false,
        lightsOutTime: null
    }

    componentDidMount(){
        
        this.setState({...this.state, beginStartSequence:true}, 
            () => setTimeout(()=> this.lightSequence(), 1500)
        )
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
        }, () => {
            if(this.state.lightsState[2] === false){
                setTimeout(() => this.lightSequence()
                , 1500);
            }
            else{
                const [max,min] = [3,1.5];
                const randomNum = Math.random() * (max - min + 1) + min;
                const reactionTime = async () => {
                    console.log("hello");
                }
                // const start = performance();
                // const lightOut = performance();
                // console.log(lightOut - start);

                setTimeout(()=> this.setState({
                    ...this.state,
                    lightsState:[false, false, false],
                    lightsOut: true,
                    lightsOutTime:performance()
                }, () => performance)
                ,randomNum * 1000)
            }
        })
    };

    reactionTime = (lightsOutTime, reactTime) =>{
        if(!lightsOutTime){
            return alert("false start")
        }
        // console.log(lightsOutTime, reactTime)
        console.log((reactTime - lightsOutTime) * 0.001)
    }


    render(){
        const {gameStart} = this.props;
        const {lightsState, lightsOut, lightsOutTime} = this.state;

        return(
        <LightsContainer 
        lightsOut={lightsOut} 
        gameStart={gameStart} 
        onMouseDown={() => 
            {
                const reactTime = performance(); 
                this.reactionTime(lightsOutTime, reactTime);
            }
        }>
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