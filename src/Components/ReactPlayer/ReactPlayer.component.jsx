import React from "react";
import ReactPlayer from "react-player";
import {Player} from "./ReactPlayer.styles";
import {Button} from "react-bootstrap"

const raceStartLinks = [
    "https://streamable.com/9h7hri",
    "https://streamable.com/6giq3y",
    "https://streamable.com/7zxt29",
    "https://streamable.com/nx93ft",
    "https://streamable.com/2hel25"
];

const Video = ({averageTime}) =>{
    const randomNum = Math.floor(Math.random() * (raceStartLinks.length + 1));

    return(
        <Player>
        <h1 className="text-dark">Average Reaction Time: {averageTime}s</h1>
        <Button variant="outline-primary">Play Again?</Button>{' '}
        <ReactPlayer 
            url={raceStartLinks[randomNum]}
            width="100%"
            height="100%"
            playing="true"
            volume="1"
        />
    </Player>
    )
}
    
    

export default Video