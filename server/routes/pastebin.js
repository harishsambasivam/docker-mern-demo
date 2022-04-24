const express = require("express");
const router = express.Router();
const { getPastedData, addData } = require("../controller/pastebin");

router.get("/", async (req, res) => {
    try {
        const data = await getPastedData();
        return res.status(200).json({
            data,
            status: "success"
        });
    } catch (err) {
        return res.status(err.statusCode || 500).json({
            status: "error",
            message: err.message || "Something went wrong"
        })
    }
});


router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const result = await addData(data);
        res.status(200).json({
            data: result,
            status: "success"
        })
    } catch (err) {
        res.status(err.statusCode || 500).json({
            status: "error",
            message: err.message || "Something went wrong"
        })
    }

});

module.exports = router;
