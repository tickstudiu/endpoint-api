module.exports = (sequelize, {INTEGER, TEXT, DATE, STRING}) => {
    return sequelize.define('log_line_otp', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            phone: {
                type: STRING(10),
                allowNull: false,
            },
            uuid: {
                type: TEXT,
                allowNull: false,
            },
            otp: {
                type: INTEGER(6),
                allowNull: false,
            },
            ref: {
                type: STRING(4),
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