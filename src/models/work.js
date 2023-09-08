const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('work',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_type_work: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_responsible: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_state_work: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            start_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            end_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            id_equipment_facilities: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};