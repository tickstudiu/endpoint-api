module.exports = (sequelize, {INTEGER, STRING, DOUBLE}) => {
    return sequelize.define('tb_withdraw_min', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            amount: {
                type: DOUBLE(10,2),
                allowNull: false,
            },
            name: {
                type: STRING(20),
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