const { Sequelize } = require('sequelize');
const sequelize = null;


const connect = () => {
    const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;
    sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/{${DB_NAME}}`);
}

module.exports = {
    connect,
    sequelize
}

