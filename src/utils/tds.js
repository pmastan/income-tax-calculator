// src/utils/tds.js

/**
 * Calculate TDS (Tax Deducted at Source)
 * @param {number} amount
 * @param {number} tdsRate
 * @returns {Object}
 */

export const calculateTDS = (amount, tdsRate) => {
  amount = Number(amount);
  tdsRate = Number(tdsRate);

  if (
    isNaN(amount) ||
    isNaN(tdsRate) ||
    amount <= 0 ||
    tdsRate < 0
  ) {
    return {
      amount: 0,
      tdsRate: 0,
      tdsAmount: 0,
      netAmount: 0,
    };
  }

  const tdsAmount = (amount * tdsRate) / 100;
  const netAmount = amount - tdsAmount;

  return {
    amount,
    tdsRate,
    tdsAmount: Number(tdsAmount.toFixed(2)),
    netAmount: Number(netAmount.toFixed(2)),
  };
};

/**
 * Format Currency (INR)
 */
export const formatCurrency = (value) => {
  return Number(value).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
};

/**
 * Common TDS Rates
 */
export const getTDSRates = () => {
  return [
    {
      rate: 1,
      description: "Purchase of Immovable Property",
    },
    {
      rate: 2,
      description: "Contract Payments",
    },
    {
      rate: 5,
      description: "Rent Payments",
    },
    {
      rate: 10,
      description: "Professional Services / Interest",
    },
    {
      rate: 20,
      description: "PAN Not Available",
    },
    {
      rate: 30,
      description: "Special Cases",
    },
  ];
};