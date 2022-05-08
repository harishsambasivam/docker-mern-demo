const ByjusLogger = require('byjus-logger');

console.log(ByjusLogger)

const byjusLogger = ByjusLogger("development", {
    pretty: true,
});

module.exports = byjusLogger;