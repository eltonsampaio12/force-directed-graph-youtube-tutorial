import { useState } from "react";

const Slider = (props: {
  title: string;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  sliderValue: number;
  min: number;
  max: number;
}) => {
  const [graphChanged, setGraphChanged] = useState<boolean>(false);
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
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
        value={props.sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};

export default Slider;
