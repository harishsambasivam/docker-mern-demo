const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Data = sequelize.define('Data', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Data.sync({ alter: true })

new Data({ "text": "Have a good day!" });
new Data({ "text": "Lorem ipsum dolor" });
module.exports = Data;