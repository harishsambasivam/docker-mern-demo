const express = require("express");
const server = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const { connect } = require("./config/db");
const pasteBinRouter = require("./routes/pastebin");
const sequelize = connect();


(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        server.use(express.json());
        server.use(cors());
        server.use('/pastebin', pasteBinRouter);
        server.listen(process.env.PORT, () => {
            console.log(`Server running on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();




