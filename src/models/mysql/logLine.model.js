module.exports = (sequelize, DataTypes) => {
    return sequelize.define('log_line', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            line_uuid: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            action_type: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            payload: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            freezeTableName: true
        });
}