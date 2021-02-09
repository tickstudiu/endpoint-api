module.exports = (sequelize, DataTypes) => {
    return sequelize.define('maintenance', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            detail: {
                type: DataTypes.STRING(50),
                allowNull: false,
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