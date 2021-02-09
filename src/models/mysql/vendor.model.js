module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_vendor', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            vendor_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            vendorCode: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            vendorNae: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            type: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            check_turn: {
                type: DataTypes.INTEGER(1),
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