const Joi = require('joi');
const { playerName, password } = require('./custom.validation');

const balance = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
    }),
};

const updatePassword = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        newPassword: Joi.string().required().custom(password),
    }),
}

const authLogin = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        password: Joi.string().required().custom(password),
        isMobile: Joi.boolean().required(),
        locale: Joi.string().required().valid('en-us', 'th-th'),
    }),
}

const updateBalance = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        amount: Joi.number().required(),
    }),
}


module.exports = {
    balance,
    updatePassword,
    authLogin,
    updateBalance
};