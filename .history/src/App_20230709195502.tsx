import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScene from "./threejs/scenes/mainScene";
import { DataProcessorService } from "./services/data.processing.service";
import data from "./db/data.json";

function App() {
  const dataProcessor: DataProcessorService = new DataProcessorService();

  useEffect(() => {
    console.log(data);
    dataProcessor.processData();
  }, []);
  return (
    <div className="App">
      <MainScene />
    </div>
  );
}

export default App;
