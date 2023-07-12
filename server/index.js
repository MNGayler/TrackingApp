const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

// ROUTERS
const foodItemsRouter = require("./routes/FoodItems");
app.use("/fooditems", foodItemsRouter);

//create database tables and start api server
db.sequelize.sync().then(() => {
  app.listen(4001, () => console.log("server running on port 4001"));
});
