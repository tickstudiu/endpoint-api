module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transactionauto', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            admin_acc: {
                type: DataTypes.STRING(40),
                allowNull: false,
                comment: 'admin account',
            },
            admin_name: {
                type: DataTypes.STRING(40),
                allowNull: false,
                comment: 'admin name',
            },
            ts_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                comment: 'transaction date',
            },
            ts_time: {
                type: DataTypes.TIME,
                allowNull: false,
                comment: 'transaction time',
            },
            ts_order: {
                type: DataTypes.STRING(10),
                allowNull: false,
                comment: 'transaction order',
            },
            ts_route: {
                type: DataTypes.STRING(200),
                allowNull: true,
                comment: 'transaction route',
            },
            ts_withdraw: {
                type: DataTypes.STRING(30),
                allowNull: false,
                comment: 'transaction withdraw amount',
            },
            ts_deposit: {
                type: DataTypes.STRING(30),
                allowNull: false,
                comment: 'transaction deposit amount',
            },
            ts_info: {
                type: DataTypes.STRING(30),
                allowNull: false,
                comment: 'transaction info',
            },
            tx_hash: {
                type: DataTypes.TEXT,
                allowNull: false,
                comment: 'transaction hash for check',
            },
            status: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                defaultValue: 0,
                comment: '0: w8 to add \n\1: added',
            },
        },
        {
            freezeTableName: true
        });
}