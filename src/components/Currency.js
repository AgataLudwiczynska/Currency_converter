import React from "react";
import CurrencyList from "./CurrencyList";
import { FaArrowRight } from "react-icons/fa";

const Currency = ({
  currencyList,
  changeHaveCurrency = (f) => f,
  changeTargetCurrency = (f) => f,
}) => {
  return (
    <div className="currency">
      <CurrencyList
        currencyList={currencyList}
        changeHandler={changeHaveCurrency}
      />
      <span>
        <FaArrowRight />
      </span>
      <CurrencyList
        currencyList={currencyList}
        changeHandler={changeTargetCurrency}
      />
    </div>
  );
};

export default Currency;
