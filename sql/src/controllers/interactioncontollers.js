const Subscription = require('../Models/interactionModel');

// Create interaction
const createinteraction = async (req, res) => {
  const { userId, plan, startDate, endDate } = req.body;
  try {
    const subscription = await Subscription.create({ userId, plan, startDate, endDate });
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User interaction
const getUserinteraction= async (req, res) => {
  const { userId } = req.params;
  try {
    const interaction = await interaction.findAll({ where: { userId } });
    res.json(interaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createinteraction, getUserinteraction };