const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const signOutController = require('../controllers/signOutController');

router.get('/',passport.checkAuthentication,signOutController.out);

module.exports = router;