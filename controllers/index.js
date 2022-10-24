//.Router is another class in the express library that helps chain our URLS together
const router = require("express").Router();
//importing the taskRoutes and userRoutes folders
const taskRoutes = require("./taskRoutes");
const userRoutes = require("./userRoutes");


//localhost:5500/api/task
router.use("/task", taskRoutes);

//localhost:5500/api/user
router.use("/user", userRoutes);


//exports the router class
module.exports = router;