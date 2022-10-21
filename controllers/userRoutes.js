//.Router is another class in the express library that helps chain our URLS together
const router = require("express").Router();
//importing models folder only using obj destructuring - because index file is entry point
const { User, Task } = require("../models");


//localhost:5500/api/user/
router.get("/", async (req, res) => {
    try {
        //findAll will return an array
        const userData = await User.findAll({
            include: [{ model: Task }],
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//localhost:5500/api/user/
router.post("/" , async (req, res) => {
    //try catch method
    try {
        //consolelog what the user input will look like
        console.log(req.body)
        const userData = await User.create(req.body);
        res.status(200).json({ msg: "We recieved your information!", userData});
    }catch (err) {
        res.status(400).json(err);
    }
})


//exports the router class
module.exports = router;