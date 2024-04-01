const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const authenticationRouter = require('./authentication');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/authentication', authenticationRouter);

    app.use('/', siteRouter);
}

module.exports = route;
