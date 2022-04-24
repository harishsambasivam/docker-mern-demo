const { Sequelize } = require('sequelize');
let connection = null;


const connect = () => {
    const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;
    connection = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    return connection;
}

const sequelize = (() => connection ? connection : connect())();

module.exports = {
    connect,
    sequelize
}

