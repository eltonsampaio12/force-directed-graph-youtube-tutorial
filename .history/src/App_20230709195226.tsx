import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScene from "./threejs/scenes/mainScene";
import { DataProcessorService } from "./services/data.processing.service";
function App() {
  const dataProcessor: DataProcessorService = new DataProcessorService();
  return (
    <div className="App">
      <MainScene />
    </div>
  );
}

export default App;
