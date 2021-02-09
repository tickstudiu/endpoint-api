module.exports = (sequelize, {INTEGER, TEXT, DATE, DOUBLE}) => {
    return sequelize.define('log_line_withdraw', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            username: {
                type: TEXT,
                allowNull: false,
            },
            account: {
                type: TEXT,
                allowNull: false,
            },
            bank_api: {
                type: TEXT,
                allowNull: false,
            },
            amount: {
                type: DOUBLE(12,2),
                allowNull: false,
            },
            created_at: {
                type: DATE,
                allowNull: true,
                defaultValue: new Date()
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