const CryptoJS = require("crypto-js");
const {timeUnix} = require("./time")

const createSignByAgentName = (agentName, token) => {

    const timeStamp = timeUnix()
    const word = agentName.toLowerCase() + timeStamp + token.toLowerCase()
    const sign = CryptoJS.SHA256(word).toString()

    return {
        timeStamp: timeStamp,
        sign: sign
    }
}
const createSignByAgentNameAndPlayerName = (agentName, playerName, token) => {

    const timeStamp = timeUnix()
    const word = agentName.toLowerCase() + playerName.toLowerCase() + timeStamp + token.toLowerCase()
    const sign = CryptoJS.SHA256(word).toString()

    return {
        timeStamp: timeStamp,
        sign: sign
    }
}
const createSignByAgentNameAndPlayerNameAndPassword = (agentName, playerName, password, token) => {
    const timeStamp = timeUnix()
    const word = agentName.toLowerCase() + playerName.toLowerCase() + password.toLowerCase() + timeStamp + token.toLowerCase()
    const sign = CryptoJS.SHA256(word).toString()

    return {
        timeStamp: timeStamp,
        sign: sign
    }
}

module.exports = {
    createSignByAgentName,
    createSignByAgentNameAndPlayerName,
    createSignByAgentNameAndPlayerNameAndPassword
}