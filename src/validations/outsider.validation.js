const Joi = require('joi');
const { playerName, password } = require('./custom.validation');

const check = {
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

const winLoss = {
    query: Joi.object().keys({
        size: Joi.number().integer().default(10),
        index: Joi.number().integer().default(1),
    }),
    body: Joi.object().keys({
        playerName: Joi.string().allow(null, ''),
        from: Joi.string().required().pattern(new RegExp(/([12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01]))/)),
        to: Joi.string().required().pattern(new RegExp(/([12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01]))/)),
        products: Joi.array().required().items(Joi.string().required().pattern(new RegExp(/^[0-9]{1,10}$/))),
    }),
};

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

const outstanding = {
    body: Joi.object().keys({
        index: Joi.number().integer().required(),
        size: Joi.number().integer().required()
    }),
}

const register = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        fullName: Joi.string().required(),
        password: Joi.string().required().custom(password),
        currency: Joi.string().required().valid('THB', 'CNY'),
        dob: Joi.string().required().pattern(new RegExp(/([12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01]))/)),
        email: Joi.string().allow('', null),
        mobileNumber: Joi.string().allow('', null),
    }),
}

const tickets = {
    body: Joi.object().keys({
        from: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])[ ]\d{2}[:]\d{2}[:]\d{2}/)),
        to: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])[ ]\d{2}[:]\d{2}[:]\d{2}/)),
    }),
}

const turnover = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        from: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])/)),
        to: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])/)),
        product: Joi.number().integer().required(),
    }),
}

const player = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName)
    }),
}

const playerDeposit = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        players: Joi.array().required().items(Joi.string().required().custom(playerName)),
        date: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])/))
    }),
}

const playerWithdrawal = {
    body: Joi.object().keys({
        players: Joi.array().required().items(Joi.string().required().custom(playerName)),
        date: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])/))
    }),
}

const memberList = {
    body: Joi.object().keys({
        from: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])/)),
        to: Joi.string().required().pattern(new RegExp(/[12]\d{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])/)),
        index: Joi.number().integer().required(),
        size: Joi.number().integer().required()
    }),
}

const playerOutstanding = {
    body: Joi.object().keys({
        playerName: Joi.string().required().custom(playerName),
        vendor: Joi.number().integer().required(),
    }),
}

module.exports = {
    check,
    updatePassword,
    authLogin,
    updateBalance,
    transfer,
    outstanding,
    register,
    tickets,
    turnover,
    player,
    playerDeposit,
    playerWithdrawal,
    memberList,
    playerOutstanding,
    winLoss
};
