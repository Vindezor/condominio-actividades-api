const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('user',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            id_owner: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            id_type_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            }
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};