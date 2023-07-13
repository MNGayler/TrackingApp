import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FoodItems = () => {
  const [listOfFoodItems, setListOfFoodItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/fooditems").then((response) => {
      setListOfFoodItems(response.data);
    });
  }, []);

  return (
    <div>
      <div className="foodContainer">
        <div className="food">
        <Link to="addfooditem">
                  <button>Add New Item</button>
                </Link>
        </div>
        {listOfFoodItems.map((value, key) => {
          return (
            <div className="food">
              <div className="food_name">{value.food_name}</div>
              <div className="food_image">{value.image}</div>
              <div className="food_button">
                <Link to="viewfooditem">
                  <button>View</button>
                </Link>
                <Link to="updatefooditem">
                  <button>Update</button>
                </Link>
                
                  <button>Delete</button>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodItems;
