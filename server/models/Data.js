const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Data = sequelize.define('Data', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Data.sync({ alter: true })

module.exports = Data;