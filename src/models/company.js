const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('company',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            contact_phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};