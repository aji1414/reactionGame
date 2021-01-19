// external libraries and stylesheet
import React,{useState} from "react";
// import './Game.styles.jsx';

// components
import {GameContainer, GameTitle, GameHint, GamePreview} from "./Game.styles.jsx";
import Lights from "../Lights/Lights.component";

// redux actions

const Game = () => {
    
    const [gameStart, setGameStart] = useState(false);
    
    return (
        <GameContainer  >
            <GamePreview gameStart={gameStart} onClick={() => setGameStart(true)}>
                <GameTitle>
                    How fast can you react?
                </GameTitle>
                <GameHint>
                    When the 5 lights go out, click anywhere on the screen as quickly as you can
                </GameHint>
            </GamePreview>
            
            <Lights gameStart={gameStart}/>
        </GameContainer>
    )
};

export default Game;