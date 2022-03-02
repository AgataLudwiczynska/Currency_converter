import React, { useEffect, useState } from "react";

const Interface = () => {
  const defaultCurrency = "USD";
  const [currencyList, setCurrencyList] = useState([]);
  const [haveCurrency, setHaveCurrency] = useState(defaultCurrency);
  const [rates, setRates] = useState([]);

  //currencyList
  useEffect(
    () =>
      fetch(
        `https://exchangerate-api.p.rapidapi.com/rapid/latest/${defaultCurrency}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "exchangerate-api.p.rapidapi.com",
            "x-rapidapi-key":
              "0bbe1afef4msh97581d81d05356ap1069f0jsnc7ff50f47f24",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.rates)
        .then(Object.keys)
        .then(setCurrencyList)
        .catch(console.error),
    []
  );

  //haveCurrency
  useEffect(() => {
    fetch(
      `https://exchangerate-api.p.rapidapi.com/rapid/latest/${haveCurrency}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "exchangerate-api.p.rapidapi.com",
          "x-rapidapi-key":
            "0bbe1afef4msh97581d81d05356ap1069f0jsnc7ff50f47f24",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => data.rates)
      .then(setRates)
      .catch(console.error);
  }, [haveCurrency]);

  const selectHandler = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setHaveCurrency(e.target.options[selectedIndex].value);
  };

  return (
    <section>
      <div>
        <h3>The currency you have:</h3>
        <form action="*">
          <select name="select" onChange={selectHandler}>
            {currencyList.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </form>
      </div>
      <input type="number" defaultValue={0} step={0.01} min={0}></input>
      <div>
        <h3>The currency you want to convert to:</h3>
        <form action="*">
          <select name="select">
            {currencyList.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </form>
      </div>
      <input value={rates.haveCurrency}></input>
    </section>
  );
};

export default Interface;
