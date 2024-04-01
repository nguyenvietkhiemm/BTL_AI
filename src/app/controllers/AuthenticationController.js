const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

class MeController {
    // [GET] /login
    login(req, res, next) {
        res.render('authentication/login');
    }

    // [GET] /register
    register(req, res, next) {
        res.render('authentication/register');
    }
}

module.exports = new MeController();
