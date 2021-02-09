module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_user_bank', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.STRING(11),
                allowNull: false,
            },
            bank_id: {
                type: DataTypes.INTEGER(5),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            account: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            create_time: {
                type: DataTypes.STRING(12),
                allowNull: false,
                defaultValue: Math.round(new Date().getTime()/1000)
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