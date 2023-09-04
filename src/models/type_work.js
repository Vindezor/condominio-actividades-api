const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('type_work',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            type_work: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};