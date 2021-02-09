module.exports = (sequelize, DataTypes) => {
    return sequelize.define('setting_line_notify', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            detail: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            token: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: '-'
            },
            type_data: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                defaultValue: 0
            },
            status: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                defaultValue: 1
            },
        },
        {
            freezeTableName: true
        });
}