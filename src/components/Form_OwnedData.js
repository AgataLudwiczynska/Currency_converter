import React from "react";
import CurrencyList from "./CurrencyList";

const Form_OwnedData = ({
  currencyList,
  input,
  changeHandler = (f) => f,
  inputHandler = (f) => f,
  buttonHandler = (f) => f,
}) => {
  return (
    <div>
      <h3>The currency you have:</h3>
      <CurrencyList currencyList={currencyList} changeHandler={changeHandler} />
      <input
        onChange={inputHandler}
        value={input}
        type="number"
        step={0.01}
        min={0}
      ></input>
      <button onClick={buttonHandler}>OK</button>
    </div>
  );
};

export default Form_OwnedData;
