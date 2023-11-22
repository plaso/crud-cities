const hbs = require('hbs');
const express = require('express');
const logger = require('morgan');

const routes = require('./routes/main.routes');

require('./config/db.config');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger('dev'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + "/views/partials");

app.use(routes);

app.listen(3000, () => {
  console.log('App listening in port 3000');
});