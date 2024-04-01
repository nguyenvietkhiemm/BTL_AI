module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        // res.locals sẽ cho phép tạo một biến local ngay trong res luôn
        enabled: false,
        type: 'default',
        column: '',
    };

    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        req.query.type = isValidtype == true ? req.query.type : 'asc';

        res.locals._sort.enabled = true;
        res.locals._sort.type = req.query.type;
        res.locals._sort.column = req.query.column;
    }

    next();
};
