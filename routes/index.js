const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controllers/home_controller');
const signUpController = require('../controllers/signUpController');
router.get('/', homeController.home);


router.use('/sign-in',require('./sign-in'));// routes to sign in (get /sign-in)
router.use('/sign-up',require('./sign-up'));  // routes to sign up (get /sign-up)
router.use('/sign-out',require('./sign-out')); // routes to sign_out
router.use('/forgot-password',require('./forget'));
router.get('/users/auth/google/callback', passport.authenticate('google',{failureRedirect: '/'}), signUpController.google);


module.exports = router;