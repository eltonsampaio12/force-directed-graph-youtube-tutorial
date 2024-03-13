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
  const [repulsiveForce, setRepulsiveForce] = useState<number>(14);
  const [attractiveForce, setAttractiveForce] = useState<number>(2);

  useEffect(() => {
    dataProcessor.processData(data);
  }, []);

  return (
    <div className="App">
      <MainScene
        attractiveForce={attractiveForce}
        repulsiveForce={repulsiveForce}
      />

      <div>
        <Slider
          title="Repulsive force"
          setSliderValue={setRepulsiveForce}
          sliderValue={repulsiveForce}
          min={2}
          max={100}
        />

        <Slider
          title="Attractive force"
          setSliderValue={setAttractiveForce}
          sliderValue={attractiveForce}
          min={0.01}
          max={100}
        />
      </div>
    </div>
  );
}

export default App;
