module.exports = (sequelize, {INTEGER}) => {
    return sequelize.define('log_promotion', {
            id: {
                type: INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user_id: {
                type: INTEGER(11),
                allowNull: false,
            },
            promotion_id: {
                type: INTEGER(3),
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
            time: {
                type: INTEGER(20),
                allowNull: false,
            },
        },
        {
            freezeTableName: true
        });
}