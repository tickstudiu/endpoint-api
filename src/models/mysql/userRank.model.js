module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_user_rank', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user: {
                type: DataTypes.INTEGER(30),
                allowNull: false,
            },
            total_turnover: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            id_rank: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: 1
            },
        },
        {
            freezeTableName: true
        });
}