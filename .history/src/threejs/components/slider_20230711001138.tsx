import React from "react";

const Slider = (props: {
  title: string;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  sliderValue: number;
  min: number;
  max: number;
  step: number; // Add a step prop for the floating-point precision
}) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value); // Parse the value as a float
    props.setSliderValue(value);
  };

  return (
    <div className="container">
      <div>
        <p>{props.title}</p>
        <p>Slider Value: {props.sliderValue}</p>
      </div>

      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step} // Set the step value to control the floating-point precision
        value={props.sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};

export default Slider;
