const express = require('express');
const router = express.Router();
const { createSubscription, getUserinteraction, createinteraction } = require('../controllers/interactioncontollers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createinteraction);
router.get('/:userId', authMiddleware, getUserinteraction);

module.exports = router;