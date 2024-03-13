const Slider = (props: {
  title: string;
  setSliderValue: any;
  sliderValue: any;
}) => {
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
        min={0}
        max={5000}
        value={props.sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};

export default Slider;
