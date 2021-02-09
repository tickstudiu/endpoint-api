const app = require('./app.js')
const mongoose = require("mongoose");
const config = require('./config/config');
const logger = require('./config/logger');
const {sequelize} = require('./models/mysql');
const fs = require("fs");
const https = require("https")

let server;

// connect to mongodb
mongoose.connect(config.mongoose.uri, config.mongoose.options).then((database) => {
    logger.info('Connected to MongoDB');

    // connect to mysqldb and start server
    sequelize.authenticate().then(() => {
        logger.info('Connected to MysqlDB');
        if(config.env !== 'development'){
            server = https.createServer({
                key: fs.readFileSync(config.key),
                cert:  fs.readFileSync(config.cert),
                ca:  fs.readFileSync(config.ca),
            }, app).listen(config.port, () => {
                console.log("Listening to port ", config.port);
            });
        } else {
            server = app.listen(config.port, () => {
                console.log("Listening to port ", config.port);
            });
        }
    }).catch(() => {
        logger.error('Failed to MysqlDB');
    })
}).catch((error) => {
    logger.info('Failed to connect MongoDB');
})

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});
