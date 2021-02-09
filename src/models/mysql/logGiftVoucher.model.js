module.exports = (sequelize, {INTEGER, STRING}) => {
    return sequelize.define('log_gift_voucher', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            gift_id: {
                type: INTEGER(10),
                allowNull: false,
            },
            user_id: {
                type: INTEGER(20),
                allowNull: false,
            },
            time_give: {
                type: INTEGER(25),
                allowNull: false,
            },
            admin: {
                type: STRING(25),
                allowNull: false,
            },
            receive: {
                type: INTEGER(1),
                allowNull: false,
            },
            time_receive: {
                type: INTEGER(25),
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });
}