
require('dotenv').config();

const tracer = require('dd-trace').init();

const express = require("express");
const server = express();
const cors = require('cors');

const { init, correlationMiddleware, contextMiddleware } = require('@harishsambasivam/pino-logger-poc');

const logger = init("development",{
    pretty: true,
    redact: {
        paths: ['message.cardNo'],
        // remove: true,
        censor: '**GDPR COMPLIANT**'
      }
});

const { connect } = require("./config/db");
const pasteBinRouter = require("./routes/pastebin");

const sequelize = connect();

server.use(express.json());

server.use(cors());

server.use(correlationMiddleware());
server.use(contextMiddleware(logger));

// server.use(logger.http);

server.use((req, res, next) => {
    let oldSend = res.send
    res.send = function (data) {
        if (res.statusCode === 500) {
            const span = tracer.scope().active();
            span.setTag('error.type', 'test');
            span.setTag('error.message', data);
            span.setTag('error.stack', 'test');
            span.addTags({
                errorMessage: data,
            })
        }
        res.send = oldSend // set function back to avoid the 'double-send'
        return res.send(data) // just call as normal with data
    }
    next()
})

server.use('/pastebin', pasteBinRouter);

server.listen(process.env.PORT, () => {
    logger.debug(`Server running on PORT ${process.env.PORT}`);
})



server.use((err, req, res, next) => {
    logger.error(err);
    res.status(err.statusCode || 500).json({
        status: "error-global",
        message: err.message || "Something went wrong"
    })
})