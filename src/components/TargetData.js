import React from "react";
import CurrencyList from "./CurrencyList";

const TargetData = ({ currencyList, result, changeHandler = (f) => f }) => {
  return (
    <div>
      <h3>The currency you want to convert to:</h3>
      <CurrencyList currencyList={currencyList} changeHandler={changeHandler} />
      <p>{result}</p>
    </div>
  );
};

export default TargetData;
