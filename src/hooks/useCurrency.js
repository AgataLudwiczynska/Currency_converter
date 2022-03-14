import { useState } from "react";

const useCurrency = (initialCurrency) => {
  const [currency, setCurrency] = useState(initialCurrency);
  const changeCurrency = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setCurrency(e.target.options[selectedIndex].value);
  };
  return [currency, changeCurrency];
};

export default useCurrency;
