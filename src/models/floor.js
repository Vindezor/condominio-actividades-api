const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('floor',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            floor: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};