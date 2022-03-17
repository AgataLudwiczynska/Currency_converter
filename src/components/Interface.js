import React, { useEffect, useState } from "react";
import useCurrency from "../hooks/useCurrency";

//components
import Currency from "./Currency";
import Form from "./Form";

const Interface = () => {
  const defaultCurrency = "USD";
  const [haveCurrency, changeHaveCurrency] = useCurrency(defaultCurrency);
  const [targetCurrency, changeTargetCurrency] = useCurrency(defaultCurrency);
  const [currencyList, setCurrencyList] = useState([]);
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

  //setInput
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  //setHaveAmount
  const buttonHandler = (e) => {
    e.preventDefault();
    setHaveAmount(input);
  };

  return (
    <section className="interface">
      <h1 className="section-header">Currency Converter</h1>
      <Currency
        currencyList={currencyList}
        changeHaveCurrency={changeHaveCurrency}
        changeTargetCurrency={changeTargetCurrency}
      />
      <div className="form">
        <Form
          input={input}
          inputHandler={inputHandler}
          buttonHandler={buttonHandler}
        />
        <p>{result}</p>
      </div>
    </section>
  );
};

export default Interface;
