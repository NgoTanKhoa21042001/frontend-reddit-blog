import React from "react";
import "../Edit/Edit.css";
const Input = (props) => {
  const { classStyle, inputType, data, setData, label } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
          className={classStyle}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
