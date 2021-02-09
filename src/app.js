const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const config = require('./config/config');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const app = express();
const passport = require('passport');
const { bearerStrategy } = require('./config/passport');
const path = require("path");
const morgan = require('./config/morgan');
const routes = require('./routes/v1');

if (config.env === 'development') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet({ contentSecurityPolicy: (config.env === 'production') ? undefined : false }));

// enable cors
app.use(cors());
app.options('*', cors());

app.use(passport.initialize());
passport.use('bearer', bearerStrategy);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// set public assets
app.use("/public", express.static(__dirname + "/public"));

// set view
app.set('views', path.join(__dirname, '/views'))

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    return res.status(400).render("pages/404.ejs");
});

module.exports = app;
