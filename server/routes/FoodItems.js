const express = require("express");
const router = express.Router();
const { FoodItems } = require("../models");

//get all food items
router.get("/", async (req, res) => {
  const listOfFoodItems = await FoodItems.findAll();
  res.json(listOfFoodItems);
});

//get individual food item by id using primary key
router.get("/byId/:id", async (req, res) => {
  //id taken from url parameter
  const id = req.params.id;
  const foodItem = await FoodItems.findByPk(id);
  res.json(foodItem) 
})


//add a food item to the database
router.post("/", async (req, res) => {
  const foodItem = req.body;
  await FoodItems.create(foodItem);
  res.json(foodItem);
});

module.exports = router;
