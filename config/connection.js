//importing sequelize library
const Sequelize = require("sequelize")

//the new keyword creates an OBJECT from a CLASS (class = sequelize)
//creating the Sequelize class - class contain two parameters that are both objects
//first parameter is the database login info and second parameter is database port info
const sequelize = new Sequelize(
"todo_db",
"root",
"Pocosong311",
{
    host: "localhost",
    dialect: "mysql",
    //PORT # that mysql installs from the internet. database port # and server # differ
    port: 3306
}
);
//exporting all the objects in the variable sequelize
module.export = sequelize;