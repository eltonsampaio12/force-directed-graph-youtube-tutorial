import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScene from "./threejs/scenes/mainScene";
import { DataProcessorService } from "./services/data.processing.service";
import { Graph } from "./threejs/entities/graph";
import data from "./db/data.json";

function App() {
  const dataProcessor: DataProcessorService = new DataProcessorService();
  const [repulsiveForce, setRepulsiveForce] = useState<number>(2000);

  useEffect(() => {
    dataProcessor.processData(data);
  }, []);

  const handleRepulsiveDistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    setRepulsiveForce(value);
  };
  return (
    <div className="App">
      <MainScene />

      <div className="container">
        <div>
          <p>Repulsive Force</p>
          <p>Slider Value: {repulsiveForce}</p>
        </div>

        <input
          type="range"
          min={0}
          max={5000}
          value={repulsiveForce}
          onChange={handleRepulsiveDistanceChange}
          className="slider"
        />
      </div>
    </div>
  );
}

export default App;
