module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_gift', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            gift_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            limit_user: {
                type: DataTypes.INTEGER(7),
                allowNull: false,
            },
            point: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
            },
            credit: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
            },
            turnover: {
                type: DataTypes.INTEGER(2),
                allowNull: false,
            },
            user: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            time_start: {
                type: DataTypes.INTEGER(25),
                allowNull: false,
            },
            time_end: {
                type: DataTypes.INTEGER(25),
                allowNull: false,
            },
            admin: {
                type: DataTypes.STRING(30),
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