const express = require("express");
const router = express.Router();
const { getPastedData, addData, deleteData } = require("../controller/pastebin");
const { logger } = require("../config/logger");


router.get("/", async (req, res) => {
    logger.info("Router: GET /pastedData");
    try {
        const data = await getPastedData();
        return res.status(200).json({
            data,
            status: "success"
        });
    } catch (err) {
        logger.error(err);
        return res.status(err.statusCode || 500).json({
            status: "error",
            message: err.message || "Something went wrong"
        })
    }
});


router.post("/", async (req, res, next) => {
    logger.info("Router: POST /pastedData");
    try {
        const data = req.body;
        const result = await addData(data);
        res.status(200).json({
            data: result,
            status: "success"
        })
    } catch (err) {
        logger.error(err);
        next(err);
    }
});

router.delete("/", async (req, res, next) => {
    logger.info("Router: DELETE /pastedData");
    try {
        const id = req.query.id;
        const result = await deleteData(id);
        res.status(200).json({
            data: result,
            status: "success"
        })
    } catch (err) {
        logger.error(err);
        next(err);
    }
});

module.exports = router;
