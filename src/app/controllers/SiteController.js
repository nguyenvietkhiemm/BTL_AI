const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
    }

    // [GET] /search
    show(req, res) {
        res.render('search');
    }

    // [GET] /:slug
    notFound(req, res, next) {
        res.render("404", {
            page: req.params.slug,
        });
    }
}

module.exports = new SiteController();
