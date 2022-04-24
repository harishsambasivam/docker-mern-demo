const Data = require("../models/Data");

const getPastedData = async () => {
    try {
        const data = await Data.findAll();
        return data;
    } catch (err) {
        throw err;
    }
}


const addData = async (newData) => {
    console.log(newData)
    try {
        const data = await Data.create(newData);
        console.log(data);
        return data;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    getPastedData,
    addData
}