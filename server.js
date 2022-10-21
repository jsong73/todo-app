//importing the express library - for api routing
const express = require("express")
//calling the express variable to use express library
const app = express();
//importing the connection.js file
const sequelize = require("./config/connection");
//importing the models folder
const Model = require("./models");
//importing controllers folder
const controllers = require("./controllers")

//navigate to available port if none specified use port # 5500
const PORT = process.env.PORT || 5500;

//use all /api content in controllers folder - everything coming from the controllers folder will have /api at the front so no need to repeatedly write /api with each get request
app.use("/api", controllers);


//localhost:5500/
// app.get("/", (req, res) => {
//  res.json("hi");    
// });







//sequlize.sync tells javascript to connect to the database
//first parameter is the port number and second parameter is the callback function
sequelize.sync().then(() => {
    app.listen(PORT, (err) =>
    console.log(`listening to port ${PORT}`));
});