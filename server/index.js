
require('dotenv').config();

const tracer = require('dd-trace').init({
    prod: "developement",
    logs_enabled: true,
    profiling: true,
    logInjection: true
});

tracer.use('express', {
  server: {
    validateStatus: code => !(code >= 400 && code < 600)
  }
})

// tracer.use('express', {
//     client: {
//       validateStatus: code => false
//     }
//   })

const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());

// tracer.use('express', {
//     validateStatus: code => false
// })
    

// const {allocateMemory} = require("./memory/allocate")







const { connect } = require("./config/db");
const pasteBinRouter = require("./routes/pastebin");

const sequelize = connect();

server.use(express.json());


// server.use(logger.http);

// server.use((req, res, next) => {
//     let oldSend = res.send
//     res.send = function (data) {
//         if (res.statusCode === 500) {
//             const span = tracer.scope().active();
//             span.setTag('error.type', 'test');
//             span.setTag('error.message', data);
//             span.setTag('error.stack', 'test');
//             span.addTags({
//                 errorMessage: data,
//             })
//         }
//         res.send = oldSend // set function back to avoid the 'double-send'
//         return res.send(data) // just call as normal with data
//     }
//     next()
// })


// server.use("/", (req,res) => {
//     res.send("working....")
// })

server.use('/pastebin', pasteBinRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
})









server.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 403).json({
        status: "error-global",
        message: err.message || "Something went wrong"
    })
})