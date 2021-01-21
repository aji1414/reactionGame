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
                const [max,min] = [4,1.5];
                const randomNum = Math.random() * (max - min + 1) + min;
                setTimeout(()=> this.setState({
                    ...this.state,
                    lightsState:[false, false, false],
                    lightsOut: true
                })
                ,randomNum * 1000)
            }
        })
    };


    render(){
        const {gameStart} = this.props;
        const {lightsState, lightsOut, hasMounted} = this.state;

        if(gameStart  && hasMounted === false){
            this.setState({...this.state, hasMounted: true},
                ()=> this.lightSequence())
        }

        return(
        <LightsContainer lightsOut={lightsOut} onClick={this.lightSequence} gameStart={gameStart}>
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