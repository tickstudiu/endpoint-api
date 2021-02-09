module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_promotion', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            casino: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            sport: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            game: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            sum_turn: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            amount_turn: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            percent: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            amount_mox: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            bonus: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            time_start: {
                type: DataTypes.INTEGER(20),
                allowNull: false,
            },
            time_end: {
                type: DataTypes.INTEGER(20),
                allowNull: false,
            },
            day_show: {
                type: DataTypes.STRING(25),
                allowNull: false,
            },
            time_start_show: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            time_end_show: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            type: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            user: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            user_group: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            min_credit: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            count_pro: {
                type: DataTypes.INTEGER(15),
                allowNull: false,
            },
            detail_pro: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            link_img: {
                type: DataTypes.STRING(50),
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