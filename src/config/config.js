const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        APP_PORT: Joi.number().default(3000),
        MONGODB_URI: Joi.string().required().description('Mongo DB url'),
        SERVER_KEY: Joi.string().required(),
        SERVER_CERT: Joi.string().required(),
        SERVER_CA: Joi.string().required(),
        MYSQL_HOST: Joi.string().default('localhost'),
        MYSQL_PORT: Joi.number().default(443),
        MYSQL_USER: Joi.string().default('root'),
        MYSQL_DATABASE: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().allow(null, ''),
        MYSQL_LIMIT_TIME: Joi.number().default(10),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.APP_PORT,
    key: envVars.SERVER_KEY,
    cert: envVars.SERVER_CERT,
    ca: envVars.SERVER_CA,
    mongoose: {
        uri: envVars.MONGODB_URI,
        options: {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        },
    },
    mysql: {
        host: envVars.MYSQL_HOST,
        port: envVars.MYSQL_PORT,
        user: envVars.MYSQL_USER,
        password: envVars.MYSQL_PASSWORD,
        database: envVars.MYSQL_DATABASE,
        limit: envVars.MYSQL_LIMIT_TIME,
    }
};
