import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div style={{ width: "800px", margin: "0 auto", paddingBottom: "20px" }}>
      <select
        onChange={(event) => onChange(event.target.value)}
        value={value}
        style={{ width: "200px", height: "1.7rem" }}
      >
        <option disabled>{defaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
