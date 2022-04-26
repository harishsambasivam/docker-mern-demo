const byjusLogger = require('byjus-logger');

const { contextMiddleware, logger } = byjusLogger.init("dev");

module.exports = {
    contextMiddleware,
    logger
}