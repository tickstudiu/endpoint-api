const { Sequelize, Op } = require('sequelize');
const config = require('../../config/config')

const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    logging: config.env === 'development',
})

/**
 * Impotent function plz do not used ture function
 *
 * ture  = auto table and clear all data
 * false = auto gen table but will not clear database
 */
sequelize.sync({ force: false })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    op: Op,
    log:{
        line: {
            info: require('./logLine.model')(sequelize, Sequelize),
            push: require('./logLinePush.model')(sequelize, Sequelize),
            otp: require('./logLineOtp.model')(sequelize, Sequelize),
            resetPassword: require('./logLineResetPassword.model')(sequelize, Sequelize),
            loginGame: require('./logLineLoginGame.model')(sequelize, Sequelize),
            loginMall: require('./logLineLoginMall.model')(sequelize, Sequelize),
            withdraw: require('./logLineWithdraw.model')(sequelize, Sequelize),
        },
        event: require('./logEvent.model')(sequelize, Sequelize),
        gift: require('./logGiftVoucher.model')(sequelize, Sequelize),
        promotion: require('./logPromotion.model')(sequelize, Sequelize),
    },
    setting: {
        server: require('./setting.model')(sequelize, Sequelize),
        line: {
            info: require('./settingLine.model')(sequelize, Sequelize),
            liff: require('./settingLineLiff.model')(sequelize, Sequelize),
            option: require('./settingLineOption.model')(sequelize, Sequelize),
            richMenu: require('./settingLineRichMenu.model')(sequelize, Sequelize),
            notify: require('./settingLineNotify.model')(sequelize, Sequelize),
            style: require('./settingLineStyle.model')(sequelize, Sequelize),
        },
        telegram: require('./settingTelegram.model')(sequelize, Sequelize),
    },
    bank: {
        info: require('./bank.model')(sequelize, Sequelize),
        group: require('./bankGroup.model')(sequelize, Sequelize),
        web: require('./bankWeb.model')(sequelize, Sequelize),
    },
    gift: require('./gift.model')(sequelize, Sequelize),
    group: require('./group.model')(sequelize, Sequelize),
    line: {
        info: require('./line.model')(sequelize, Sequelize),
        notify: require('./lineNotify.model')(sequelize, Sequelize),
    },
    otp: require('./otp.model')(sequelize, Sequelize),
    point: require('./point.model')(sequelize, Sequelize),
    promotion: require('./promotion.model')(sequelize, Sequelize),
    rank: require('./rank.model')(sequelize, Sequelize),
    report: {
        line: require('./reportLine.model')(sequelize, Sequelize),
    },
    turnover: require('./turnover.model')(sequelize, Sequelize),
    user: {
        info: require('./user.model')(sequelize, Sequelize),
        bank: require('./userBank.model')(sequelize, Sequelize),
        group: require('./userGroup.model')(sequelize, Sequelize),
        rank: require('./userRank.model')(sequelize, Sequelize),
    },
    vendor: {
        info: require('./vendor.model')(sequelize, Sequelize),
    },
    withdraw: {
        info: require('./withdraw.model')(sequelize, Sequelize),
        limit: require('./withdrawLimit.model')(sequelize, Sequelize),
        min: require('./withdrawMin.model')(sequelize, Sequelize),
    },
    statement: require('./statement.model')(sequelize, Sequelize),
    transactionAuto: require('./transactionauto.model')(sequelize, Sequelize),
    event: require('./event.model')(sequelize, Sequelize),
    maintenance: require('./maintenance.model')(sequelize, Sequelize),
    code: {
        error: require('./codeError.model')(sequelize, Sequelize),
    }
};
