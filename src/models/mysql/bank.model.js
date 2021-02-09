module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_bank', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            bank_en: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            bank_th: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            bank_short	: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            api_id: {
                type: DataTypes.STRING(5),
                allowNull: false,
            }
        },
        {
            freezeTableName: true
        });
}