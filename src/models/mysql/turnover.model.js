module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_turnover', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.STRING(25),
                allowNull: false,
            },
            promotion_id: {
                type: DataTypes.INTEGER(3),
                allowNull: false,
            },
            code_id: {
                type: DataTypes.INTEGER(3),
                allowNull: false,
            },
            sport: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 0
            },
            casino: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 0
            },
            game: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 0
            },
            checkturn: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 0
            },
            check_time: {
                type: DataTypes.INTEGER(13),
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