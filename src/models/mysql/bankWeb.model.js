module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_bank_web', {
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
            account: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            bank_id: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            type: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            account_check: {
                type: DataTypes.STRING(6),
                allowNull: false,
            },
            deviceId: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            ApiRefresh: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            user: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            pass: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            pin_app: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            create_time: {
                type: DataTypes.STRING(12),
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