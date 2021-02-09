/**
 * Init error code database
 * @type {({code: number, description: string}|{code: number, description: string})[]}
 */
const initErrorCode = [
    {
        code: -1,
        description: 'Invalid username'
    },
    {
        code: -2,
        description: 'Invalid password'
    }
]

const initCodeError = [
    {
        code: 0,
        description: 'Success'
    },
    {
        code: -1,
        description: 'Invalid Operation'
    },
    {
        code: -2,
        description: 'Invalid Key'
    },
    {
        code: -3,
        description: 'Invalid Player'
    },
    {
        code: -7,
        description: 'Max limit reach'
    },
    {
        code: -10,
        description: 'Invalid transfer amount'
    },
    {
        code: -13,
        description: 'Invalid Player'
    },
    {
        code: -19,
        description: 'Empty IP'
    },
    {
        code: -101,
        description: 'Empty Upline'
    },{
        code: -102,
        description: 'Empty/invalid Player name'
    },
    {
        code: -103,
        description: 'Empty Password'
    },
    {
        code: -104,
        description: 'Invalid password length'
    },
    {
        code: -105,
        description: 'Invalid password format'
    },
    {
        code: -106,
        description: 'Empty DOB'
    },
    {
        code: -107,
        description: 'Player exists'
    },
    {
        code: -108,
        description: 'Company not found'
    },
    {
        code: -109,
        description: 'Invalid Operation'
    },
    {
        code: -110,
        description: 'Invalid Operation'
    },
    {
        code: -111,
        description: 'Empty Email address'
    },
    {
        code: -112,
        description: 'Invalid Email format'
    },
    {
        code: -113,
        description: 'Empty Mobile number'
    },
    {
        code: -114,
        description: 'Invalid Mobile format'
    },
    {
        code: -115,
        description: 'Invalid currency'
    },
    {
        code: -116,
        description: 'Invalid TransactionId'
    },
    {
        code: -99,
        description: 'Others'
    },
]


module.exports = {
    initCodeError
}
