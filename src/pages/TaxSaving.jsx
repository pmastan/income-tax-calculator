import React, { useState } from "react";
import "./Calculator.css";

const TaxSaving = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [investment, setInvestment] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const [taxSaved, setTaxSaved] = useState(null);
  const [taxableIncome, setTaxableIncome] = useState(null);
  const [netIncome, setNetIncome] = useState(null);

  const calculateTaxSaving = () => {
    const income = parseFloat(annualIncome);
    const invest = parseFloat(investment);
    const rate = parseFloat(taxRate);

    if (
      isNaN(income) ||
      isNaN(invest) ||
      isNaN(rate) ||
      income <= 0 ||
      invest < 0 ||
      rate < 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const taxable = income - invest;
    const saved = (invest * rate) / 100;
    const net = income - saved;

    setTaxableIncome(taxable.toFixed(2));
    setTaxSaved(saved.toFixed(2));
    setNetIncome(net.toFixed(2));
  };

  const resetCalculator = () => {
    setAnnualIncome("");
    setInvestment("");
    setTaxRate("");
    setTaxSaved(null);
    setTaxableIncome(null);
    setNetIncome(null);
  };

  return (
    <div className="calculator-page">
      <div className="calculator-card">
        <h2>Tax Saving Calculator</h2>

        <p className="subtitle">
          Estimate your tax savings based on eligible investments.
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
          <label>Eligible Investment (₹)</label>
          <input
            type="number"
            placeholder="Enter Investment Amount"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Tax Rate (%)</label>
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
            onClick={calculateTaxSaving}
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

        {taxSaved !== null && (
          <div className="result-card">
            <h3>Calculation Result</h3>

            <div className="result-row">
              <span>Annual Income</span>
              <strong>
                ₹ {Number(annualIncome).toLocaleString()}
              </strong>
            </div>

            <div className="result-row">
              <span>Investment</span>
              <strong>
                ₹ {Number(investment).toLocaleString()}
              </strong>
            </div>

            <div className="result-row">
              <span>Taxable Income</span>
              <strong>
                ₹ {taxableIncome}
              </strong>
            </div>

            <div className="result-row">
              <span>Estimated Tax Saved</span>
              <strong className="green">
                ₹ {taxSaved}
              </strong>
            </div>

            <div className="result-row total">
              <span>Net Income After Tax Saving</span>
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

export default TaxSaving;