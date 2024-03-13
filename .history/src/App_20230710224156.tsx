import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScene from "./threejs/scenes/mainScene";
import { DataProcessorService } from "./services/data.processing.service";
import { Graph } from "./threejs/entities/graph";
import data from "./db/data.json";

function App() {
  const dataProcessor: DataProcessorService = new DataProcessorService();
  const [repulsiveDistance, setRepulsionDistance] = useState<number>(2000);

  useEffect(() => {
    dataProcessor.processData(data);
  }, []);

  const handleRepulsiveDistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    setRepulsionDistance(value);
  };
  return (
    <div className="App">
      <MainScene />

      <div className="container">
        <input
          type="range"
          min={0}
          max={5000}
          value={repulsiveDistance}
          onChange={handleRepulsiveDistanceChange}
          className="slider"
        />
        <p>Slider value: {repulsiveDistance}</p>
      </div>
    </div>
  );
}

export default App;
