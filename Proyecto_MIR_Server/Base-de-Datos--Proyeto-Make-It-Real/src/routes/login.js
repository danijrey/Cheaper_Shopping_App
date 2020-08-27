const router = require('express').Router();
const loginController = require('../controllers/login.controller.js');


router.route('/signin').post(loginController.signin);

module.exports = router;
