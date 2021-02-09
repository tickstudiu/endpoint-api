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

const transfer = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        from: Joi.string().required().pattern(new RegExp(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/)),
        to: Joi.string().required().pattern(new RegExp(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/)),
        index: Joi.number().integer().required(),
        size: Joi.number().integer().required()
    }),
}


module.exports = {
    balance,
    updatePassword,
    authLogin,
    updateBalance,
    transfer
};