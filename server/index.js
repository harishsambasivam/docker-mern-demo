
require('dotenv').config();

const tracer = require('dd-trace').init();

const express = require("express");
const server = express();
const cors = require('cors');

const logger = require('byjus-logger')("development", {
    pretty: true,
});


const { connect } = require("./config/db");
const pasteBinRouter = require("./routes/pastebin");

const sequelize = connect();

server.use(express.json());

server.use(cors());

server.use(logger.correlationMiddleware());
server.use(logger.contextMiddleware);

// server.use(logger.http);

server.use('/pastebin', pasteBinRouter);

server.listen(process.env.PORT, () => {
    logger.debug(`Server running on PORT ${process.env.PORT}`);
    // logger.info(`Server running on PORT ${process.env.PORT}`);
    // logger.warn(`Server running on PORT ${process.env.PORT}`);
    // logger.error(`Server running on PORT ${process.env.PORT}`);
    // logger.fatal(`Server running on PORT ${process.env.PORT}`);
})

// server.use((err, req, res, next) => {
//     const span = tracer.scope().active()
//     span.setTag('customer.id', "12345")

//     res.status(err.statusCode || 500).json({
//         status: "error-global",
//         message: err.message || "Something went wrong"
//     })

// })