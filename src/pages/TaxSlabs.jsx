import React, { useState } from "react";
import "./Calculator.css";

const TaxSlabs = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const [taxAmount, setTaxAmount] = useState(null);
  const [netIncome, setNetIncome] = useState(null);

  const calculateTax = () => {
    const income = parseFloat(annualIncome);
    const rate = parseFloat(taxRate);

    if (
      isNaN(income) ||
      isNaN(rate) ||
      income <= 0 ||
      rate < 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const tax = (income * rate) / 100;
    const net = income - tax;

    setTaxAmount(tax.toFixed(2));
    setNetIncome(net.toFixed(2));
  };

  const resetCalculator = () => {
    setAnnualIncome("");
    setTaxRate("");
    setTaxAmount(null);
    setNetIncome(null);
  };

  return (
    <div className="calculator-page">
      <div className="calculator-card">
        <h2>Tax Slab Calculator</h2>

        <p className="subtitle">
          Calculate your estimated income tax based on your tax slab rate.
        </p>

        <div className="form-group">
          <label>Annual Income (₹)</label>
          <input
            type="number"
            placeholder="Enter Annual Income"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Tax Slab Rate (%)</label>
          <input
            type="number"
            placeholder="Enter Tax Rate"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button
            className="calculate-btn"
            onClick={calculateTax}
          >
            Calculate
          </button>

          <button
            className="reset-btn"
            onClick={resetCalculator}
          >
            Reset
          </button>
        </div>

        {taxAmount !== null && (
          <div className="result-card">
            <h3>Calculation Result</h3>

            <div className="result-row">
              <span>Annual Income</span>
              <strong>
                ₹ {Number(annualIncome).toLocaleString()}
              </strong>
            </div>

            <div className="result-row">
              <span>Tax Slab Rate</span>
              <strong>{taxRate}%</strong>
            </div>

            <div className="result-row">
              <span>Income Tax</span>
              <strong className="red">
                ₹ {taxAmount}
              </strong>
            </div>

            <div className="result-row total">
              <span>Net Income After Tax</span>
              <strong className="green">
                ₹ {netIncome}
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxSlabs;