const router = require("express-promise-router")();
const { getPastedData, addData, deleteData } = require("../controller/pastebin");


router.get("/", async (req, res, next) => {
    console.log("Router: GET pastedData/");
    try {
        const data = await getPastedData();
        return res.status(200).json({
            data,
            status: "success"
        });
        // throw new Error("Unauthorized!!!");
    } catch (err) {
        // next(err);
        return res.status(err.statusCode || 401).json({
            status: "error",
            message: err.message || "Something went wrong"
        })
    }
});


router.post("/", async (req, res, next) => {
    console.log("Router: POST pastedData/");
    try {
        // const data = req.body;
        // const result = await addData(data);
        // res.status(201).json({
        //     data: result,
        //     status: "success"
        // })
        throw new Error("post error");
    } catch (err) {
        next(err);
    }
});

router.delete("/", async (req, res, next) => {
    console.log("Router: DELETE pastedData/");
    try {
        const id = req.query.id;
        const result = await deleteData(id);
        res.status(200).json({
            data: result,
            status: "success"
        })
    } catch (err) {
        next(err);
    }
});

module.exports = router;
