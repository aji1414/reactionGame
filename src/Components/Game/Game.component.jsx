// external libraries and stylesheet
import React,{useState} from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

// components
import {GameContainer, GameTitle, GameHint, GamePreview, Lightning} from "./Game.styles.jsx";
import Lights from "../Lights/Lights.component";

// redux actions

const Game = () => {
    
    const [gameStart, setGameStart] = useState(false);
    
    return (
        <GameContainer  >
            <GamePreview gameStart={gameStart} onClick={() => setGameStart(true)}>
                <Lightning icon={faBolt} size="8x" />
                <GameTitle>
                    How fast can you react?
                </GameTitle>
                <GameHint>
                    When the 5 lights go out, click anywhere on the screen as quickly as you can
                </GameHint>
            </GamePreview>
            
            {gameStart === true ?
            <Lights gameStart={gameStart}/>
            :
            null
            }
            
        </GameContainer>
    )
};

export default Game;