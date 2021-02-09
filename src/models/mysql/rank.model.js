module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_rank', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(25),
                allowNull: false,
            },
            trunover: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            point: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            spin: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            sale: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            reward_premium: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            reward_exclusive: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            img_link: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });
}