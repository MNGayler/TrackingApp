import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/IndividualFoodItem.css";

const UpdateFoodItem = () => {
  let { id } = useParams();

  // foodItemObject is set as an empty object
  const [foodItemObject, setFoodItemObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:4001/fooditems/byId/${id}`).then((response) => {
      setFoodItemObject(response.data);
    });
  }, []);

  return (
    <div className="foodItemPage">
      <div className="leftSide">
        <div className="foodItem" id="individual">
          <div className="foodName">
            <h3>Item Name: {foodItemObject.food_name}</h3>
          </div>
          <div className="energy">
            <h3>Energy: {foodItemObject.energy}</h3>
          </div>
          <div className="fibre">
            <h3>Fibre: {foodItemObject.fibre}</h3>
          </div>
          <div className="image">
            <h3>Image: {foodItemObject.image}</h3>
          </div>
        </div>
      </div>
      <div className="rightSide">THIS WILL CONTAIN THE UPDATE FORM</div>
    </div>
  );
};

export default UpdateFoodItem;
