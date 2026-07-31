import React, { useState } from "react";
import "./Calculator.css";

const StampDuty = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [stampDutyRate, setStampDutyRate] = useState("");
  const [registrationRate, setRegistrationRate] = useState("");

  const [stampDuty, setStampDuty] = useState(null);
  const [registrationFee, setRegistrationFee] = useState(null);
  const [totalCost, setTotalCost] = useState(null);

  const calculateStampDuty = () => {
    const property = parseFloat(propertyValue);
    const stampRate = parseFloat(stampDutyRate);
    const regRate = parseFloat(registrationRate);

    if (
      isNaN(property) ||
      isNaN(stampRate) ||
      isNaN(regRate) ||
      property <= 0 ||
      stampRate < 0 ||
      regRate < 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const stamp = (property * stampRate) / 100;
    const registration = (property * regRate) / 100;
    const total = property + stamp + registration;

    setStampDuty(stamp.toFixed(2));
    setRegistrationFee(registration.toFixed(2));
    setTotalCost(total.toFixed(2));
  };

  const resetCalculator = () => {
    setPropertyValue("");
    setStampDutyRate("");
    setRegistrationRate("");
    setStampDuty(null);
    setRegistrationFee(null);
    setTotalCost(null);
  };

  return (
    <div className="calculator-page">
      <div className="calculator-card">
        <h2>Stamp Duty Calculator</h2>

        <p className="subtitle">
          Calculate Stamp Duty, Registration Charges, and Total Property Cost.
        </p>

        <div className="form-group">
          <label>Property Value (₹)</label>
          <input
            type="number"
            placeholder="Enter Property Value"
            value={propertyValue}
            onChange={(e) => setPropertyValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Stamp Duty Rate (%)</label>
          <input
            type="number"
            placeholder="Enter Stamp Duty Rate"
            value={stampDutyRate}
            onChange={(e) => setStampDutyRate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Registration Fee Rate (%)</label>
          <input
            type="number"
            placeholder="Enter Registration Fee Rate"
            value={registrationRate}
            onChange={(e) => setRegistrationRate(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button
            className="calculate-btn"
            onClick={calculateStampDuty}
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

        {stampDuty !== null && (
          <div className="result-card">
            <h3>Calculation Result</h3>

            <div className="result-row">
              <span>Property Value</span>
              <strong>
                ₹ {Number(propertyValue).toLocaleString()}
              </strong>
            </div>

            <div className="result-row">
              <span>Stamp Duty</span>
              <strong className="red">
                ₹ {stampDuty}
              </strong>
            </div>

            <div className="result-row">
              <span>Registration Fee</span>
              <strong className="red">
                ₹ {registrationFee}
              </strong>
            </div>

            <div className="result-row total">
              <span>Total Property Cost</span>
              <strong className="green">
                ₹ {totalCost}
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StampDuty;