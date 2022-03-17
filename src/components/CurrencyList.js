import React from "react";

const CurrencyList = ({ currencyList, changeHandler = (f) => f }) => {
  return (
    <form>
      <select name="select" onChange={changeHandler}>
        {currencyList.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CurrencyList;
