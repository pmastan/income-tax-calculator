// src/utils/incomeTax.js

/**
 * Calculate Income Tax (New Tax Regime - Simplified)
 * @param {number} income
 * @returns {Object}
 */

export const calculateIncomeTax = (income) => {
  let tax = 0;
  let slab = "";

  if (income <= 0 || isNaN(income)) {
    return {
      income: 0,
      tax: 0,
      netIncome: 0,
      slab: "N/A",
    };
  }

  if (income <= 400000) {
    slab = "0%";
    tax = 0;
  } else if (income <= 800000) {
    slab = "5%";
    tax = (income - 400000) * 0.05;
  } else if (income <= 1200000) {
    slab = "10%";
    tax = 20000 + (income - 800000) * 0.10;
  } else if (income <= 1600000) {
    slab = "15%";
    tax = 60000 + (income - 1200000) * 0.15;
  } else if (income <= 2000000) {
    slab = "20%";
    tax = 120000 + (income - 1600000) * 0.20;
  } else if (income <= 2400000) {
    slab = "25%";
    tax = 200000 + (income - 2000000) * 0.25;
  } else {
    slab = "30%";
    tax = 300000 + (income - 2400000) * 0.30;
  }

  return {
    income,
    slab,
    tax: Number(tax.toFixed(2)),
    netIncome: Number((income - tax).toFixed(2)),
  };
};

/**
 * Format currency in Indian Rupees
 * @param {number} amount
 * @returns {string}
 */
export const formatCurrency = (amount) => {
  return Number(amount).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
};

/**
 * Get available tax slabs
 */
export const getTaxSlabs = () => {
  return [
    {
      range: "₹0 - ₹4,00,000",
      rate: "0%",
    },
    {
      range: "₹4,00,001 - ₹8,00,000",
      rate: "5%",
    },
    {
      range: "₹8,00,001 - ₹12,00,000",
      rate: "10%",
    },
    {
      range: "₹12,00,001 - ₹16,00,000",
      rate: "15%",
    },
    {
      range: "₹16,00,001 - ₹20,00,000",
      rate: "20%",
    },
    {
      range: "₹20,00,001 - ₹24,00,000",
      rate: "25%",
    },
    {
      range: "Above ₹24,00,000",
      rate: "30%",
    },
  ];
};