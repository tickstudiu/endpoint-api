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

    const code = await model.code.error.findOne({where: {code: data.Error}})
    if (!code){
        return {
            data
        }
    }

    if (data.Error !== 0){
        return res.send({
            status: code.description,
            sign: data.Sign
        })
    }

    return res.send({
        status: code.description,
        sign: data.Sign,
        balance: data.Balance
    })
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

    if(!data.Status){
        return res.send({
            status: 'Invalid Operation',
        })
    }

    return res.send({
        status: 'Success',
    })
});

module.exports = {
    balance,
    updatePassword
}
