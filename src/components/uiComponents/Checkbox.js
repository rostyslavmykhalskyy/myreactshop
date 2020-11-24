import React, { useState } from "react";

const Checkbox = ({ text }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="checkboxField">
      {text}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
