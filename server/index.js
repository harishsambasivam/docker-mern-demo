const dotenv = require('dotenv');
dotenv.config();

const tracer = require('dd-trace').init({
    profiling: true,
    env: process.env.NODE_ENV,
});

const express = require("express");
const server = express();
const cors = require('cors');
const { contextMiddleware, logger, httpLogger, pinoHttpLogger } = require("./config/logger");
const { connect } = require("./config/db");
const pasteBinRouter = require("./routes/pastebin");
const sequelize = connect();


console.log('Connection has been established successfully.');

server.use(express.json());

server.use(cors());

server.use(contextMiddleware);

// server.use(httpLogger(logger));

server.use(pinoHttpLogger(logger));

server.use('/pastebin', pasteBinRouter);

server.listen(process.env.PORT, () => {
    logger.debug(`Server running on PORT ${process.env.PORT}`);
})

server.use((err, req, res, next) => {
    const span = tracer.scope().active()
    span.setTag('customer.id', "12345")

    res.status(err.statusCode || 500).json({
        status: "error-global",
        message: err.message || "Something went wrong"
    })

})