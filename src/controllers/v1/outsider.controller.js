const catchAsync = require('../../utils/catchAsync');
const {createSignByAgentNameAndPlayerName, createSignByAgentNameAndPlayerNameAndPassword} = require('../../utils/sign')
const axios = require('axios');
const model = require('../../models/mysql');

const balance = catchAsync(async (req, res) => {
    const {playerName} = req.body
    const token = await model.setting.server.findOne({where: {name: 'token'}})
    const agent = await model.setting.server.findOne({where: {name: 'agent'}})
    const {timeStamp, sign} = createSignByAgentNameAndPlayerName(agent.code, playerName, token.code)

    const {data} = await axios.post('https://ctransferapi.linkv2.com/api/credit-transfer/balance ', {
        AgentName: agent.code,
        PlayerName: playerName,
        TimeStamp: timeStamp,
        Sign: sign
    })

    return res.send({data})
});

const updatePassword = catchAsync(async (req, res) => {
    const {playerName, newPassword} = req.body
    const token = await model.setting.server.findOne({where: {name: 'token'}})
    const agent = await model.setting.server.findOne({where: {name: 'agent'}})
    const {timeStamp, sign} = createSignByAgentNameAndPlayerNameAndPassword(agent.code, playerName, newPassword, token.code)

    const {data} = await axios.post('https://cauthapi.linkv2.com/api/credit-auth/changepassword', {
        PlayerName: playerName,
        Partner: agent.code,
        Newpassword: newPassword,
        TimeStamp: timeStamp,
        Sign: sign
    })

    return res.send({data})
});

const login = catchAsync(async (req, res) => {
    const {playerName, password, isMobile, locale } = req.body
    const token = await model.setting.server.findOne({where: {name: 'token'}})
    const agent = await model.setting.server.findOne({where: {name: 'agent'}})
    const {timeStamp, sign} = createSignByAgentNameAndPlayerNameAndPassword(agent.code, playerName, password, token.code)

    const {data} = await axios.post('https://cauthapi.linkv2.com/api/credit-auth/login', {
        Username: playerName,
        Partner: agent.code,
        Domain: `https://imidemo.net`,
        Lang: locale,
        IsMobile: isMobile,
        TimeStamp: timeStamp,
        Sign: sign
    })

    return res.send({data})
});

module.exports = {
    balance,
    updatePassword,
    login
}
