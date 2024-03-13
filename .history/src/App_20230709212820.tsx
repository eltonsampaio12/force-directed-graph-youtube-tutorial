import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScene from "./threejs/scenes/mainScene";
import { DataProcessorService } from "./services/data.processing.service";
import { Graph } from "./threejs/entities/graph";
import data from "./db/data.json";

function App() {
  const dataProcessor: DataProcessorService = new DataProcessorService();

  useEffect(() => {
    dataProcessor.processData(data);
    console.log(Graph.getInstance().nodes);
  }, []);

  return (
    <div className="App">
      <MainScene />
    </div>
  );
}

export default App;
