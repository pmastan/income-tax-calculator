import React, { useState } from "react";
import "./Calculator.css";

const TDSCalculator = () => {
  const [amount, setAmount] = useState("");
  const [tdsRate, setTdsRate] = useState("");
  const [tdsAmount, setTdsAmount] = useState(null);
  const [netAmount, setNetAmount] = useState(null);

  const calculateTDS = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(tdsRate);

    if (isNaN(amt) || isNaN(rate) || amt <= 0 || rate < 0) {
      alert("Please enter valid values.");
      return;
    }

    const tds = (amt * rate) / 100;
    const net = amt - tds;

    setTdsAmount(tds.toFixed(2));
    setNetAmount(net.toFixed(2));
  };

  const resetCalculator = () => {
    setAmount("");
    setTdsRate("");
    setTdsAmount(null);
    setNetAmount(null);
  };

  return (
    <div className="calculator-page">
      <div className="calculator-card">
        <h2>TDS Calculator</h2>
        <p className="subtitle">
          Calculate Tax Deducted at Source (TDS) quickly and easily.
        </p>

        <div className="form-group">
          <label>Amount (₹)</label>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>TDS Rate (%)</label>
          <input
            type="number"
            placeholder="Enter TDS Rate"
            value={tdsRate}
            onChange={(e) => setTdsRate(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button className="calculate-btn" onClick={calculateTDS}>
            Calculate
          </button>

          <button className="reset-btn" onClick={resetCalculator}>
            Reset
          </button>
        </div>

        {tdsAmount !== null && (
          <div className="result-card">
            <h3>Calculation Result</h3>

            <div className="result-row">
              <span>Amount</span>
              <strong>₹ {Number(amount).toLocaleString()}</strong>
            </div>

            <div className="result-row">
              <span>TDS Rate</span>
              <strong>{tdsRate}%</strong>
            </div>

            <div className="result-row">
              <span>TDS Amount</span>
              <strong className="red">₹ {tdsAmount}</strong>
            </div>

            <div className="result-row total">
              <span>Net Amount Payable</span>
              <strong className="green">₹ {netAmount}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TDSCalculator;