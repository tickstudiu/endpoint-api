module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_report_line', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            report: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            username: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: Math.round(new Date().getTime() / 1000)
            },
            updatedAt: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: Math.round(new Date().getTime() / 1000)
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
