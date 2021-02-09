module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_line', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            tel: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            line_id: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            line_user_id: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            locale: {
                type: DataTypes.STRING(12),
                allowNull: false,
                defaultValue: 'th'
            },
            create_time: {
                type: DataTypes.STRING(20),
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