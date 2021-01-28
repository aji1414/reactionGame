// external libraries and stylesheet
import React,{useState, Component} from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

// components
import {GameContainer, GameTitle, GameHint, GamePreview, Lightning} from "./Game.styles.jsx";
import Lights from "../Lights/Lights.component";

// redux actions

class Game extends Component{
    
    state={
        gameStart: false,
        attemptCount:2,
        remountKey: (new Date()).getTime(),
        reactionTimes:[]
    }

    resetCounter = (newCount, reactionTime) => {
        let newCountFinal = this.state.attemptCount;
        if(newCount){newCountFinal = newCount;}

        let newReactionTimes = this.state.reactionTimes;
        if(reactionTime){
            newReactionTimes = [...newReactionTimes, Number(reactionTime)]
        }
        this.setState({
            ...this.state,
          reactionTimes:newReactionTimes,
          remountKey: (new Date()).getTime(),
          attemptCount: newCountFinal
        }, ()=> console.log(this.state.reactionTimes));
    }

    addFinalTime = (reactionTime) =>{
        this.setState({...this.state, reactionTimes:[...this.state.reactionTimes, Number(reactionTime)]})
    }
    

    render(){
        const {gameStart, remountKey, attemptCount, reactionTimes} = this.state;
        
        return (
            <GameContainer  >
                
                {gameStart === true ?
                <Lights 
                gameStart={gameStart} 
                key={remountKey}
                attemptCount={attemptCount}
                resetCounter={this.resetCounter}
                reactionTimes={reactionTimes}
                addFinalTime={this.addFinalTime}
                />
                :
                <GamePreview  onClick={() => this.setState({...this.state, gameStart: true})}>
                    <Lightning icon={faBolt} size="8x" />
                    <GameTitle>
                        How fast can you react?
                    </GameTitle>
                    <GameHint>
                        When the 5 lights go out, click anywhere on the screen as quickly as you can
                    </GameHint>
                </GamePreview>
                }
            </GameContainer>
        )
    }
    
};

export default Game;