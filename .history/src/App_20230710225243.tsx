import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScene from "./threejs/scenes/mainScene";
import { DataProcessorService } from "./services/data.processing.service";
import { Graph } from "./threejs/entities/graph";
import data from "./db/data.json";
import Slider from "./threejs/components/slider";

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
      <Slider
        title="Repulsive force"
        setSliderValue={setRepulsiveForce}
        sliderValue={repulsiveForce}
      />
    </div>
  );
}

export default App;
