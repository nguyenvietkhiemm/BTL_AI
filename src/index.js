const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const SortMiddleware = require('./app/middlewares/SortMiddleware.js');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

// http logger
app.use(morgan('combined'));

//static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// override method
app.use(methodOverride('_method'));

// custorm middleware
app.use(SortMiddleware);

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'), // helper là các hàm được dùng trong file hbs
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // dirname là đường dẫn tuyệt đối dẫn đến file hiện tại

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
