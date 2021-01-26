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
        attemptCount:0,
        remountKey: (new Date()).getTime()
    }

    resetCounter = (newCount) => {
        let newCountFinal = this.state.attemptCount;
        if(newCount){newCountFinal = newCount;}

        this.setState({
            ...this.state,
          remountKey: (new Date()).getTime(),
          attemptCount: newCountFinal
        });
      }
    

    render(){
        const {gameStart, remountKey, attemptCount} = this.state;
        
        return (
            <GameContainer  >
                
                {gameStart === true ?
                <Lights 
                gameStart={gameStart} 
                key={remountKey}
                attemptCount={attemptCount}
                resetCounter={this.resetCounter}
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