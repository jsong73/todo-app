const router = require("express").Router();
const { Task } = require ("../models");

router.get("/", (req, res) => {
res.json("Im in taskRoutes folder!");
});

router.post("/", async (req, res) => {
try{
    const taskData = await Task.create(req.body);
    res.status(200).json({ msg: "It went into task table!", taskData })
} catch (err){
    res.status(400).json(err);
}
});

module.exports = router;


