const Data = require("../models/Data");

const getPastedData = async () => {
    console.log(Error("Controller: Get Pasted Data"));
    try {
        const data = await Data.findAll({
            limit: 5,
            order: [
                ['createdAt', 'DESC'],
            ],
        });
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


async function addData(newData) {
    console.log("Controller: Add New Data");
    try {
        newData.text = newData.text !== "" ? newData.text : null;
        const data = await Data.create(newData);
        return data;
    } catch (err) {
        console.log({err, function:"addData"});
        throw err;
    }
}

const deleteData = async (id) => {
    console.log("Controller: Delete data");
    try {
        const data = await Data.destroy(id);
        logger.debug(data);
        return data;
    } catch (err) {
        console.log(err);
        err.statusCode = 400;
        throw err;
    }
}


module.exports = {
    getPastedData,
    addData,
    deleteData
}