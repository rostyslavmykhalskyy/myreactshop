import React, { useState } from "react";

const Slider = ({ min, max }) => {
  const [leftThumb, setLeftThumb] = useState(min);
  const [rightThumb, setRightThumb] = useState(max);
  const leftThumbHandler = (e) => {
    if (parseInt(e.target.value, 10) < rightThumb) {
      setLeftThumb(e.target.value);
      trackHandler();
    }
  };
  const rightThumbHandler = (e) => {
    if (parseInt(e.target.value, 10) > leftThumb) {
      setRightThumb(e.target.value);
      trackHandler();
    }
  };
  const trackHandler = () => {
    return {
      width: ((rightThumb - leftThumb) / (max - min)) * 100 + "%",
      marginLeft: ((leftThumb - min) / (max - min)) * 100 + "%",
      marginRight: ((rightThumb - max) / (max - min)) * 100 + "%"
    };
  };
  return (
    <div className="sliderRangeDouble">
      <input
        type="range"
        name=""
        id=""
        min={min}
        max={max}
        value={leftThumb}
        onChange={leftThumbHandler}
      />
      <input
        type="range"
        name=""
        id=""
        min={min}
        max={max}
        value={rightThumb}
        onChange={rightThumbHandler}
      />
      <div className="rangeTrack">
        <div className="track" style={trackHandler()}></div>
      </div>
      <p>
        Price: {leftThumb}$ - {rightThumb}$
      </p>
    </div>
  );
};

export default Slider;
