//object destructuring 
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//class is child and model is parent
class Task extends Model {}
//will always need a class and extends when using init with sequelize
Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: "user",
            key: "id",
          },
        },
      },
      {
    //connecting to sequelize database
    sequelize,
    //create two columns - one for when you made the column and one for when you updated column
    timestamps: true,
    //By default, without true, table will be called users
    freezeTableName: true,
    //camel casing
    userscored: true,
    modelName: "task",
}
);
//exporting class User
module.exports = Task;