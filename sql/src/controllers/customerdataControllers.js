const Payment = require('../models/customerdatamodel');

// Record Payment
const recordPayment = async (req, res) => {
  const { userId, amount, date, customerdata } = req.body;
  try {
    const payment = await Payment.create({ userId, amount, date, customerdata });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { recordPayment };