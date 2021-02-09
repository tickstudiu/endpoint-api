const catchAsync = require('../../utils/catchAsync');
const httpStatus = require('http-status');
const model = require('../../models/mysql');
const init = require('../../utils/init');

const mysqlMockupDatabase = catchAsync(async (req, res) => {

    init.initCodeError.map(async data => {
        await model.code.error.create(data)
    })

    res.status(httpStatus.CREATED).send({
        statusCode: httpStatus.CREATED,
    })
});

module.exports = {
    mysqlMockupDatabase,
}
