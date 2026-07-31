// src/utils/gst.js

/**
 * Calculate GST
 * @param {number} amount
 * @param {number} gstRate
 * @returns {Object}
 */

export const calculateGST = (amount, gstRate) => {
  amount = Number(amount);
  gstRate = Number(gstRate);

  if (
    isNaN(amount) ||
    isNaN(gstRate) ||
    amount <= 0 ||
    gstRate < 0
  ) {
    return {
      amount: 0,
      gstRate: 0,
      gstAmount: 0,
      cgst: 0,
      sgst: 0,
      totalAmount: 0,
    };
  }

  const gstAmount = (amount * gstRate) / 100;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const totalAmount = amount + gstAmount;

  return {
    amount,
    gstRate,
    gstAmount: Number(gstAmount.toFixed(2)),
    cgst: Number(cgst.toFixed(2)),
    sgst: Number(sgst.toFixed(2)),
    totalAmount: Number(totalAmount.toFixed(2)),
  };
};

/**
 * Format currency
 */
export const formatCurrency = (value) => {
  return Number(value).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
};

/**
 * GST Rates
 */
export const getGSTRates = () => {
  return [
    {
      rate: 0,
      description: "Essential Goods",
    },
    {
      rate: 5,
      description: "Basic Necessities",
    },
    {
      rate: 12,
      description: "Standard Goods",
    },
    {
      rate: 18,
      description: "Most Goods & Services",
    },
    {
      rate: 28,
      description: "Luxury Goods",
    },
  ];
};