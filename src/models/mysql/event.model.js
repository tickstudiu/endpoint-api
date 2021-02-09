module.exports = (sequelize, {INTEGER, STRING, TEXT}) => {
    return sequelize.define('tb_event', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: STRING(50),
                allowNull: false,
            },
            type_turnover: {
                type: INTEGER(1),
                allowNull: false,
            },
            turnover: {
                type: INTEGER(10),
                allowNull: false,
            },
            credit: {
                type: INTEGER(10),
                allowNull: false,
            },
            percent: {
                type: INTEGER(3),
                allowNull: false,
            },
            amount_max: {
                type: INTEGER(10),
                allowNull: false,
            },
            point: {
                type: INTEGER(10),
                allowNull: false,
            },
            time_start: {
                type: INTEGER(20),
                allowNull: false,
            },
            time_end: {
                type: INTEGER(20),
                allowNull: false,
            },
            user: {
                type: INTEGER(1),
                allowNull: false,
            },
            user_group: {
                type: STRING(50),
                allowNull: false,
            },
            deposit: {
                type: INTEGER(10),
                allowNull: false,
            },
            count: {
                type: INTEGER(15),
                allowNull: false,
            },
            count_max: {
                type: INTEGER(15),
                allowNull: false,
            },
            detail_event: {
                type: TEXT,
                allowNull: false,
            },
            link_img: {
                type: TEXT,
                allowNull: false,
            },
            status: {
                type: INTEGER(1),
                allowNull: false,
                defaultValue: 1
            },
        },
        {
            freezeTableName: true
        });
}