module.exports = (sequelize, {INTEGER, TEXT, DATE, STRING}) => {
    return sequelize.define('log_line_login_game', {
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
            language: {
                type: STRING(4),
                allowNull: false,
            },
            token: {
                type: TEXT,
                allowNull: false,
            },
            redirectUrl: {
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