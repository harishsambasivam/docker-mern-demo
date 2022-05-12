const { Sequelize } = require('sequelize');
const  logger  = require('@harishsambasivam/pino-logger-poc').child({"module":"database"});
let connection = null;

const connect = () => {
    const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;
    connection = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
        logging: msg => logger.info({query: msg},"msg")
    });
    return connection;
}

const sequelize = (() => connection ? connection : connect())();

module.exports = {
    connect,
    sequelize
}

