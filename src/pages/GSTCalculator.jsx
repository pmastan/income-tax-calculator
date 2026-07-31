import { useState } from "react";
import "./GSTCalculator.css";

function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [type, setType] = useState("exclusive");

  const [gstAmount, setGstAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [baseAmount, setBaseAmount] = useState(null);

  const calculateGST = () => {
    const price = Number(amount);
    const rate = Number(gstRate);

    if (!price || price <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    let gst = 0;
    let total = 0;
    let base = 0;

    if (type === "exclusive") {
      gst = (price * rate) / 100;
      total = price + gst;
      base = price;
    } else {
      base = (price * 100) / (100 + rate);
      gst = price - base;
      total = price;
    }

    setBaseAmount(base);
    setGstAmount(gst);
    setTotalAmount(total);
  };

  const resetForm = () => {
    setAmount("");
    setGstRate("18");
    setType("exclusive");
    setBaseAmount(null);
    setGstAmount(null);
    setTotalAmount(null);
  };

  return (
    <div className="gst-container">
      <h1>GST Calculator</h1>

      <div className="gst-card">

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
          <label>GST Rate</label>

          <select
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
          >
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>

        <div className="form-group">
          <label>Calculation Type</label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="exclusive">GST Exclusive</option>
            <option value="inclusive">GST Inclusive</option>
          </select>
        </div>

        <div className="button-group">
          <button onClick={calculateGST}>
            Calculate GST
          </button>

          <button
            className="reset-btn"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>

        {gstAmount !== null && (
          <div className="result-box">
            <h2>GST Calculation</h2>

            <p>
              <strong>Base Amount:</strong> ₹
              {baseAmount.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
            </p>

            <p>
              <strong>GST Amount:</strong> ₹
              {gstAmount.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
            </p>

            <h1>
              ₹
              {totalAmount.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
            </h1>

            <p>Total Amount</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default GSTCalculator;