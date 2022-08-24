const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const signInController = require('../controllers/signInController');

router.get('/', passport.authenticate('local',{failureRedirect: '/'}) ,signInController.in);
router.get('/reset-password',passport.checkAuthentication,signInController.reset_password);
router.get('/via-mail/reset-password',signInController.reset_password);
router.get('/reset-password/data/:email',signInController.reset_password_data);


module.exports = router;