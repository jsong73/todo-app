//importing the express library
const express = require("express")
//calling the express variable to use express library
const app = express();
//importing the connection.js file
const sequelize = require("./config/connection")
//navigate to available port if none specified use port # 5500
const PORT = process.env.PORT || 5500;









//sequlize.sync tells javascript to connect to the database
sequelize.sync().then(()=>{
//first parameter is the port number and second parameter is the callback function
app.listen(PORT, (err) =>{
console.log(`PORT ${PORT} is running`)  
});
});