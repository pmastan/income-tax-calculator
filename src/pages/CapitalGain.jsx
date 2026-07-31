import React, { useState } from "react";
import "./Calculator.css";

const CapitalGain = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const [capitalGain, setCapitalGain] = useState(null);
  const [capitalGainTax, setCapitalGainTax] = useState(null);
  const [netProfit, setNetProfit] = useState(null);

  const calculateCapitalGain = () => {
    const purchase = parseFloat(purchasePrice);
    const selling = parseFloat(sellingPrice);
    const rate = parseFloat(taxRate);

    if (
      isNaN(purchase) ||
      isNaN(selling) ||
      isNaN(rate) ||
      purchase < 0 ||
      selling < 0 ||
      rate < 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const gain = selling - purchase;
    const tax = gain > 0 ? (gain * rate) / 100 : 0;
    const profit = gain - tax;

    setCapitalGain(gain.toFixed(2));
    setCapitalGainTax(tax.toFixed(2));
    setNetProfit(profit.toFixed(2));
  };

  const resetCalculator = () => {
    setPurchasePrice("");
    setSellingPrice("");
    setTaxRate("");
    setCapitalGain(null);
    setCapitalGainTax(null);
    setNetProfit(null);
  };

  return (
    <div className="calculator-page">
      <div className="calculator-card">
        <h2>Capital Gain Calculator</h2>

        <p className="subtitle">
          Calculate your capital gain, tax amount, and net profit.
        </p>

        <div className="form-group">
          <label>Purchase Price (₹)</label>
          <input
            type="number"
            placeholder="Enter Purchase Price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Selling Price (₹)</label>
          <input
            type="number"
            placeholder="Enter Selling Price"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Capital Gain Tax Rate (%)</label>
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
            onClick={calculateCapitalGain}
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

        {capitalGain !== null && (
          <div className="result-card">
            <h3>Calculation Result</h3>

            <div className="result-row">
              <span>Purchase Price</span>
              <strong>
                ₹ {Number(purchasePrice).toLocaleString()}
              </strong>
            </div>

            <div className="result-row">
              <span>Selling Price</span>
              <strong>
                ₹ {Number(sellingPrice).toLocaleString()}
              </strong>
            </div>

            <div className="result-row">
              <span>Capital Gain</span>
              <strong className={capitalGain >= 0 ? "green" : "red"}>
                ₹ {capitalGain}
              </strong>
            </div>

            <div className="result-row">
              <span>Capital Gain Tax</span>
              <strong className="red">
                ₹ {capitalGainTax}
              </strong>
            </div>

            <div className="result-row total">
              <span>Net Profit</span>
              <strong className="green">
                ₹ {netProfit}
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapitalGain;