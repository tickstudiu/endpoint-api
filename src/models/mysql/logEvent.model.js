module.exports = (sequelize, {INTEGER}) => {
    return sequelize.define('log_event', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user_id: {
                type: INTEGER(5),
                allowNull: false,
            },
            event_id: {
                type: INTEGER(5),
                allowNull: false,
            },
            before_creadit: {
                type: INTEGER(10),
                allowNull: false,
            },
            after_creadit: {
                type: INTEGER(10),
                allowNull: false,
            },
            before_point: {
                type: INTEGER(10),
                allowNull: false,
            },
            after_point: {
                type: INTEGER(10),
                allowNull: false,
            },
            time: {
                type: INTEGER(25),
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });
}