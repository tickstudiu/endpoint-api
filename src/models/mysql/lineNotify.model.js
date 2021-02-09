module.exports = (sequelize, {INTEGER, TEXT}) => {
    return sequelize.define('tb_linenotify', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            type: {
                type: TEXT,
                allowNull: false,
            },
            token: {
                type: TEXT,
                allowNull: false,
            },
            balance: {
                type: INTEGER(6),
                allowNull: false,
            },
            delay: {
                type: INTEGER(6),
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