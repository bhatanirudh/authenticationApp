const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const signUpController = require('../controllers/signUpController');

router.get('/email', signUpController.email);
router.get('/email/data',signUpController.data);
router.get('/auth/google', passport.authenticate('google', {scope:['profile','email']}));

module.exports = router;