const express = require('express');
const config = require('../../config/config');
const router = express.Router();
const initRoute = require('./init.route');
const docsRoute = require('./docs.route');
const outsiderRoute = require('./outsider.route');

const defaultRoutes = [
    {
        path: '/outsider',
        route: outsiderRoute,
    },
];

const devRoutes = [
    // routes available only in development mode
    {
        path: '/init',
        route: initRoute,
    },
    {
        path: '/docs',
        route: docsRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

module.exports = router;
