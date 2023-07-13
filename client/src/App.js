import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfFoodItems, setListOfFoodItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/fooditems").then((response) => {
      setListOfFoodItems(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="foodContainer">
        {listOfFoodItems.map((value, key) => {
          return (
            <div className="food">
              <div className="food_name">{value.food_name}</div>
              <div className="food_image">{value.image}</div>
              <div className="food_button">
                <button>View</button>
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
