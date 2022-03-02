import React, { useEffect, useState } from "react";

const Interface = () => {
  const defaultCurrency = "USD";
  const [currencyList, setCurrencyList] = useState([]);
  const [haveCurrency, setHaveCurrency] = useState(defaultCurrency);
  const [targetCurrency, setTargetCurrency] = useState(defaultCurrency);
  const [rates, setRates] = useState([]);
  const [input, setInput] = useState(0);
  const [haveAmount, setHaveAmount] = useState(0);
  const [result, setResult] = useState();

  //setCurrencyList
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

  //setRates
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

  //setResult
  useEffect(
    () => setResult(haveAmount * rates[targetCurrency]),
    [haveAmount, targetCurrency, haveCurrency, rates]
  );

  //setHaveCurrency
  const selectHandler = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setHaveCurrency(e.target.options[selectedIndex].value);
  };

  //setInput
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  //setHaveAmount
  const buttonHandler = (e) => {
    e.preventDefault();
    setHaveAmount(input);
  };

  //setTargetCurrency
  const resultHandler = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setTargetCurrency(e.target.options[selectedIndex].value);
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
        <input
          onChange={inputHandler}
          value={input}
          type="number"
          step={0.01}
          min={0}
        ></input>
        <button onClick={buttonHandler}>OK</button>
      </div>
      <div>
        <h3>The currency you want to convert to:</h3>
        <form action="*">
          <select name="select" onChange={resultHandler}>
            {currencyList.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </form>
      </div>
      <p>{result}</p>
    </section>
  );
};

export default Interface;
