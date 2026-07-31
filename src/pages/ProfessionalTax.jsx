import React, { useState } from "react";
import "./Calculator.css";

const ProfessionalTax = () => {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [ptRate, setPtRate] = useState("");

  const [monthlyTax, setMonthlyTax] = useState(null);
  const [annualTax, setAnnualTax] = useState(null);
  const [netMonthlySalary, setNetMonthlySalary] = useState(null);

  const calculateProfessionalTax = () => {
    const salary = parseFloat(monthlySalary);
    const rate = parseFloat(ptRate);

    if (
      isNaN(salary) ||
      isNaN(rate) ||
      salary <= 0 ||
      rate < 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const monthlyPT = (salary * rate) / 100;
    const annualPT = monthlyPT * 12;
    const netSalary = salary - monthlyPT;

    setMonthlyTax(monthlyPT.toFixed(2));
    setAnnualTax(annualPT.toFixed(2));
    setNetMonthlySalary(netSalary.toFixed(2));
  };

  const resetCalculator = () => {
    setMonthlySalary("");
    setPtRate("");
    setMonthlyTax(null);
    setAnnualTax(null);
    setNetMonthlySalary(null);
  };

  return (
    <div className="calculator-page">
      <div className="calculator-card">
        <h2>Professional Tax Calculator</h2>

        <p className="subtitle">
          Calculate Professional Tax based on your monthly salary.
        </p>

        <div className="form-group">
          <label>Monthly Salary (₹)</label>
          <input
            type="number"
            placeholder="Enter Monthly Salary"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Professional Tax Rate (%)</label>
          <input
            type="number"
            placeholder="Enter Tax Rate"
            value={ptRate}
            onChange={(e) => setPtRate(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button
            className="calculate-btn"
            onClick={calculateProfessionalTax}
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

        {monthlyTax !== null && (
          <div className="result-card">
            <h3>Calculation Result</h3>

            <div className="result-row">
              <span>Monthly Salary</span>
              <strong>
                ₹ {Number(monthlySalary).toLocaleString()}
              </strong>
            </div>

            <div className="result-row">
              <span>Professional Tax Rate</span>
              <strong>{ptRate}%</strong>
            </div>

            <div className="result-row">
              <span>Monthly Professional Tax</span>
              <strong className="red">
                ₹ {monthlyTax}
              </strong>
            </div>

            <div className="result-row">
              <span>Annual Professional Tax</span>
              <strong className="red">
                ₹ {annualTax}
              </strong>
            </div>

            <div className="result-row total">
              <span>Net Monthly Salary</span>
              <strong className="green">
                ₹ {netMonthlySalary}
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTax;