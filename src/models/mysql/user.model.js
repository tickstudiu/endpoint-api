module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_user', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            user : {
                type: DataTypes.STRING(25),
                allowNull: false,
                defaultValue: ''
            },
            name: {
                type: DataTypes.STRING(30),
                allowNull: false,
                defaultValue: ''
            },
            line: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            line_user_id: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: ''
            },
            point: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: 0
            },
            spin: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: 0
            },
            create_time: {
                type: DataTypes.STRING(12),
                allowNull: false,
                defaultValue: Math.round(new Date().getTime() / 1000)
            },
            comefrom: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                defaultValue: '1'
            },
            status: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                defaultValue: 1
            },
            sale_credit: {
                type: DataTypes.STRING(12),
                allowNull: false,
                defaultValue: '0'
            },
        },
        {
            freezeTableName: true
        });
}