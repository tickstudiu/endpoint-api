module.exports = (sequelize, {INTEGER, DOUBLE}) => {
    return sequelize.define('tb_withdraw_limit', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            limit_amount: {
                type: DOUBLE(10,2),
                allowNull: false,
            },
            bank_id: {
                type: INTEGER(1),
                allowNull: false,
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