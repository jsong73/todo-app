//.Router is another class in the express library that helps chain our URLS together
const router = require("express").Router();


//localhost:5500/api/index
router.get("/index", (req, res) => {
 res.json("hi");    
});

module.exports = router;