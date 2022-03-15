import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Form = ({ input, inputHandler = (f) => f, buttonHandler = (f) => f }) => {
  return (
    <>
      <input
        onChange={inputHandler}
        value={input}
        type="number"
        step={0.01}
        min={0}
      ></input>
      <button onClick={buttonHandler}>
        <FaArrowRight />
      </button>
    </>
  );
};

export default Form;
