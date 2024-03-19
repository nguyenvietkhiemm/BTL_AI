class SiteController {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
