const express = require('express');
const router = express.Router();
const { loginWithGoogle, manualRegister } = require('../controllers/authController');

router.post('/google', loginWithGoogle);
router.post('/register', manualRegister);

module.exports = router;
