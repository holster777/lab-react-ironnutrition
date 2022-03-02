

import './App.css';
import { useState } from 'react';
import foods from './foods.json'
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import SearchBar from './Components/SearchBar/SearchBar.jsx'

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [displayList, setDisplayList] = useState(foods)
  const [showAddForm, setShowAddForm] = useState(true);


  const addFood = (newFood) => {
      
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);
    setDisplayList(updatedFoodList);
 
}

  const searchFoods = (searchTerm) => {

    let searchedFoods = foodList.filter((food) => {

      return food.name.toLowerCase().startsWith(searchTerm.toLowerCase())

    })

    setDisplayList(searchedFoods)

  }

  const deleteFoods = (foodName) => {
    const filteredFood = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setDisplayList(filteredFood);
    setFoodList(filteredFood);
  };

  const addFoodToggle = () => {
    setShowAddForm(!showAddForm);

  };


  return (


    <div className="App">

    <h1>Food List</h1>

    <div>
      <h4>Search for Food</h4>
      <SearchBar search={searchFoods}/>
    </div>
  
    <div>

      <button className="btn" onClick={addFoodToggle}>{!showAddForm ? 'Hide' : 'Add New Food'}</button>
      {!showAddForm && <AddFoodForm addFood={addFood}/>}
    </div>

    <div>

      <h4>My Food</h4>

    {displayList.length === 0 ? <p>Oops all the foods gone!?</p> : displayList.map((food) => <FoodBox food={food} deleteFood={deleteFoods}/>)}

    </div>
      
    </div>
  );
}

export default App;
