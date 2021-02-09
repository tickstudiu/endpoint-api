module.exports = (sequelize, {INTEGER, TEXT, DATE}) => {
    return sequelize.define('log_line_reset_password', {
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
            password: {
                type: TEXT,
                allowNull: false,
            },
            new_password: {
                type: TEXT,
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