module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_statement', {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            bank_id: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
            },
            datetime: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            deposit: {
                type: DataTypes.DOUBLE(13,2),
                allowNull: false,
            },
            withdraw: {
                type: DataTypes.DOUBLE(13,2),
                allowNull: false,
            },
            fee: {
                type: DataTypes.DOUBLE(9,2),
                allowNull: false,
            },
            note: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            dateCreate: {
                type: DataTypes.STRING(12),
                allowNull: false,
            },
            from_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            from_account: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            from_bank: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            deposit_id: {
                type: DataTypes.INTEGER(20),
                allowNull: false,
            },
            withdraw_id: {
                type: DataTypes.INTEGER(20),
                allowNull: false,
            },
            admin_id: {
                type: DataTypes.INTEGER(4),
                allowNull: false,
            },
            status: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                comment: '0 ปิด 1 รอเฟิร์ม 2 เฟิร์มแล้ว 3 ซิสเต็ม 4 ยกเลิก 5 ซ่อนรายการ\t',
                defaultValue: 1
            },
        },
        {
            freezeTableName: true
        });
}