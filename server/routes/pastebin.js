const express = require("express");
const router = express.Router();
const { getPastedData, addData } = require("../controller/pastebin");

router.get("/", () => {
    try {
        const data = getPastedData();
        res.send(200).json({
            data,
            status: "success"
        });
    } catch (err) {
        res.send(err.statusCode || 500).json({
            status: "error",
            message: err.message || "Something went wrong"
        })
    }
});


router.post("/", (req, res) => {
    try {
        const { data } = req.body;
        addData(data);
        res.send(200).json({
            status: "success"
        })
    } catch (err) {
        res.send(err.statusCode || 500).json({
            status: "error",
            message: err.message || "Something went wrong"
        })
    }

});