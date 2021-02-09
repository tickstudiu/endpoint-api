module.exports = (sequelize, {INTEGER, STRING, DOUBLE}) => {
    return sequelize.define('tb_withdraw', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            time: {
                type: STRING(15),
                allowNull: false,
                defaultValue: Math.round(new Date().getTime() / 1000)
            },
            user_id: {
                type: INTEGER(11),
                allowNull: false,
            },
            account: {
                type: STRING(12),
                allowNull: false,
            },
            amount: {
                type: DOUBLE(12,2),
                allowNull: false,
            },
            bank_api: {
                type: STRING(12),
                allowNull: false,
            },
            admin_cf: {
                type: INTEGER(5),
                allowNull: false,
                defaultValue: '0'
            },
            admin_check: {
                type: INTEGER(5),
                allowNull: false,
                defaultValue: '0'
            },
            admin_cfTime: {
                type: STRING(12),
                allowNull: false,
                defaultValue: '0'
            },
            bank_web_id: {
                type: INTEGER(2),
                allowNull: false,
                defaultValue: 0
            },
            status: {
                type: INTEGER(1),
                allowNull: false,
                defaultValue: 1
            },
        },
        {
            freezeTableName: true
        });
}