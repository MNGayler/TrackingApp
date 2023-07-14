import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodItems from "./pages/FoodItems";
import ViewFoodItem from "./pages/ViewFoodItem";
import UpdateFoodItem from "./pages/UpdateFoodItem";
import AddFoodItem from "./pages/AddFoodItem"

function App() {
  return  <div className="App">
    <Router>
      <Routes>
        <Route path="/fooditems" element={<FoodItems />} />
        <Route path="/fooditems/updatefooditem/:id" element={<UpdateFoodItem />} />
        <Route path="/fooditems/viewfooditem/:id" element={<ViewFoodItem />} />
        <Route path="/fooditems/addfooditem" element={<AddFoodItem />} />
      </Routes>
    </Router>
    
    
    
     </div>
}

export default App;
