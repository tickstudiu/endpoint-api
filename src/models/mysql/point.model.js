module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_point', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            type: {
                type: DataTypes.INTEGER(20),
                allowNull: true,
            },
            point: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            reward_id: {
                type: DataTypes.INTEGER(1),
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