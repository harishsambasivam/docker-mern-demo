const express = require("express");
const server = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const { connect } = require("./config/db");

server.use(express.json());
server.use(cors());

connect();

server.use('/pastebin', pasteBinRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
})