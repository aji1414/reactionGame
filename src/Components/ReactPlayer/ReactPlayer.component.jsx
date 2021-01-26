import React from "react";
import ReactPlayer from "react-player";
import {Player} from "./ReactPlayer.styles";

const Video = ({averageTime}) =>(
    <Player>
        <h1 className="text-dark">Average Reaction Time: {averageTime}</h1>
        <ReactPlayer 
            url="https://streamable.com/9h7hri"
            width="100%"
            height="95%"
            playing="true"
            volume="1"
        />
    </Player>
    
);

export default Video