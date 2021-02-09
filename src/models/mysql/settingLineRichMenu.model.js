module.exports = (sequelize, DataTypes) => {
    return sequelize.define('setting_line_rich_menu', {
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
            value: {
                type: DataTypes.TEXT,
                allowNull: true,
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