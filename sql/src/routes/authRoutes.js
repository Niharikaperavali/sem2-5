const express = require('express');
const router = express.Router();
const { signUp, logIn, verifyToken } = require('../controllers/authcontroller');

// Public routes
router.post('/signup', signUp);
router.post('/login', logIn);


module.exports = router;