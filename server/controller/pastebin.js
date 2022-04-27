const Data = require("../models/Data");
const { logger } = require("../config/logger");

const getPastedData = async () => {
    logger.info("Controller: Get Pasted Data");
    try {
        const data = await Data.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
        });
        logger.debug(data);
        return data;
    } catch (err) {
        logger.error(err);
        throw err;
    }
}


async function addData(newData) {
    logger.info("Controller: Add New Data");

    try {
        newData.text = newData.text !== "" ? newData.text : null;
        const data = await Data.create(newData);
        logger.debug(data);
        return data;
    } catch (err) {
        logger.error(err);
        err.statusCode = 400;
        throw err;
    }
}


const deleteData = async (id) => {
    logger.info("Controller: Delete data");

    try {
        const data = await Data.destroy(id);
        logger.debug(data);
        return data;
    } catch (err) {
        logger.error(err);
        err.statusCode = 400;
        throw err;
    }
}


module.exports = {
    getPastedData,
    addData,
    deleteData
}