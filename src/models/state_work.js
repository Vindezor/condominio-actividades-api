const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('state_work',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            state_work: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};