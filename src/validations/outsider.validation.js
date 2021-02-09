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


module.exports = {
    balance,
    updatePassword
};