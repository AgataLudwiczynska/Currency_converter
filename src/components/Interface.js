import React, { useEffect, useState } from "react";

const Interface = () => {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(
    () =>
      fetch("https://exchangerate-api.p.rapidapi.com/rapid/latest/USD", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "exchangerate-api.p.rapidapi.com",
          "x-rapidapi-key":
            "0bbe1afef4msh97581d81d05356ap1069f0jsnc7ff50f47f24",
        },
      })
        .then((res) => res.json())
        .then((data) => data.rates)
        .then(Object.keys)
        .then(setCurrencyList)
        .catch(console.error),
    []
  );

  return (
    <section>
      <div>
        <h3>The currency you have:</h3>
        <form action="*">
          <select name="select">
            {currencyList.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </form>
      </div>
      <input></input>
      <div>
        <h3>The currency you want to convert to:</h3>
        <form action="*">
          <select name="select">
            {currencyList.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </form>
      </div>
      <input></input>
    </section>
  );
};

export default Interface;
