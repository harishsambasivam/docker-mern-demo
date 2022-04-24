const Data = require("../models/Data");

const getPastedData = () => {
    try {
        const data = await Data.getAll();
        return data;
    } catch (err) {
        throw err;
    }
}


const addData = (newData) => {
    try {
        const data = new Data(newData);
        return data;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    getPastedData,
    addData
}