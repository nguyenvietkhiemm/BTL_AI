var express = require('express');
var router = express.Router();

const authenticationController = require('../app/controllers/AuthenticationController');

router.get('/login', authenticationController.login);
router.get('/register', authenticationController.register);
router.post('/login', authenticationController.login);
router.post('/register', authenticationController.register);
router.get('/', authenticationController.register);

module.exports = router;
