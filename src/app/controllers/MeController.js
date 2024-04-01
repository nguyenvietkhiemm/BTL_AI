const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsWithDeleted({ deleted: true }),
        ]) // có thể sử dụng async await
            .then(([courses, count]) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                    count,
                });
            })
            .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true }) // chỗ này mongoose-delete ngu vc, làm thế này chả khác gì làm tay
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
