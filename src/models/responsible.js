const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('responsible',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            document_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id_company: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};