import { useState, useEffect } from "react";

export default function CurrencyConverter({ fromCode, toCode }) {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);

  const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  // Convert text input to a number safely
  const numericAmount = Number(amount);

  // Run useEffect to call API everytime fromCode and toCode changes
  useEffect(() => {
  async function fetchResult() {
    const resultRes = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCode}/${toCode}/${numericAmount}`
    );

    const resultData = await resultRes.json();
    setResult(resultData.conversion_result);
  }

  fetchResult();
}, [fromCode, toCode, numericAmount]);

  return (
    <div className="converter-line">
      <input 
        value={amount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={handleAmountChange}
      />

      <span className="converter-code">{fromCode}</span>
      
      <span className="converter-equals">=</span>
      
      <span className="converter-result">
        {amount === "" || Number.isNaN(numericAmount) ? "—" : result}
      </span>

      <span className="converter-code">{toCode}</span>
    </div>
  );
}
