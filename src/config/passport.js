const bearer = require('passport-http-bearer');
const model = require('../models/mysql');

const bearerStrategy = new bearer.Strategy(
    (token, done) => {
        model.setting.server.findOne({where: { name: 'bearer' }}).then(data => {
            if (!data){
                return done('Failed token');
            }

            if (data.code !== token){
                return done('Failed token');
            }

            return done(null, token, { scope: 'all' });
        }).catch(error => {
            return done(error);
        })
    }
)

module.exports = {
    bearerStrategy,
};