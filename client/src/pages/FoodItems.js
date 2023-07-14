import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const FoodItems = () => {
  const [listOfFoodItems, setListOfFoodItems] = useState([]);

  let navigate = useNavigate();

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


                {/* navigate to view the selected items details */}
                <button onClick={ () => {
                  navigate(`/fooditems/viewfooditem/${value.id}`)
                }}>View</button>
                
                {/* navigate to edit the selected items details */}
                <button onClick={ () => {
                  navigate(`/fooditems/updatefooditem/${value.id}`)
                }}>Update</button>
                
                
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
