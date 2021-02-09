module.exports = (sequelize, {INTEGER, STRING, TEXT}) => {
    return sequelize.define('tb_code_error', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            code: {
                type: STRING(10),
                allowNull: false,
            },
            description: {
                type: TEXT,
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });
}