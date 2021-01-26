// external libraries and stylesheet
import React from "react";
import './App.styles.scss';

// components
import Header from "./Components/Header/Header.component";
import Game from "./Components/Game/Game.component";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Game />
    </div>
  );
}

export default App;
