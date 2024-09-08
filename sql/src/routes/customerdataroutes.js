const express = require('express');
const router = express.Router();
const { recorddata } = require('../controllers/customerdataControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, recorddata);

module.exports = router;