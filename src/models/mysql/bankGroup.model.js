module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_bank_group', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            bank_id: {
                type: DataTypes.INTEGER(5),
                allowNull: false,
            },
            group_id: {
                type: DataTypes.INTEGER(5),
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