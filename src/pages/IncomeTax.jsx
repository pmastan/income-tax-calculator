import { useState } from "react";
import "./IncomeTax.css";

function IncomeTax() {
  const [income, setIncome] = useState("");
  const [regime, setRegime] = useState("new");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const annualIncome = Number(income);

    if (!annualIncome || annualIncome <= 0) {
      alert("Please enter a valid annual income.");
      return;
    }

    let totalTax = 0;

    if (regime === "new") {
      if (annualIncome <= 400000) {
        totalTax = 0;
      } else if (annualIncome <= 800000) {
        totalTax = (annualIncome - 400000) * 0.05;
      } else if (annualIncome <= 1200000) {
        totalTax =
          20000 +
          (annualIncome - 800000) * 0.10;
      } else if (annualIncome <= 1600000) {
        totalTax =
          60000 +
          (annualIncome - 1200000) * 0.15;
      } else if (annualIncome <= 2000000) {
        totalTax =
          120000 +
          (annualIncome - 1600000) * 0.20;
      } else if (annualIncome <= 2400000) {
        totalTax =
          200000 +
          (annualIncome - 2000000) * 0.25;
      } else {
        totalTax =
          300000 +
          (annualIncome - 2400000) * 0.30;
      }
    } else {
      if (annualIncome <= 250000) {
        totalTax = 0;
      } else if (annualIncome <= 500000) {
        totalTax = (annualIncome - 250000) * 0.05;
      } else if (annualIncome <= 1000000) {
        totalTax =
          12500 +
          (annualIncome - 500000) * 0.20;
      } else {
        totalTax =
          112500 +
          (annualIncome - 1000000) * 0.30;
      }
    }

    // 4% Health & Education Cess
    totalTax = totalTax + totalTax * 0.04;

    setTax(totalTax);
  };

  const resetForm = () => {
    setIncome("");
    setRegime("new");
    setTax(null);
  };

  return (
    <div className="income-tax-container">
      <h1>Income Tax Calculator</h1>

      <div className="tax-card">

        <div className="form-group">
          <label>Annual Income (₹)</label>

          <input
            type="number"
            placeholder="Enter Annual Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Select Tax Regime</label>

          <select
            value={regime}
            onChange={(e) => setRegime(e.target.value)}
          >
            <option value="new">New Regime</option>
            <option value="old">Old Regime</option>
          </select>
        </div>

        <div className="button-group">
          <button onClick={calculateTax}>Calculate Tax</button>

          <button className="reset-btn" onClick={resetForm}>
            Reset
          </button>
        </div>

        {tax !== null && (
          <div className="result-box">
            <h2>Estimated Tax</h2>

            <h1>₹ {tax.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}</h1>

            <p>(Including 4% Health & Education Cess)</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default IncomeTax;