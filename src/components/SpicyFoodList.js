import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArr = [...foods, newFood]
    setFoods(newFoodArr)
  }

  function handleRemoveFood(id) {
    const newFoodArr = foods.filter(food => food.id !== id)
    setFoods(newFoodArr)
  }

//   function handleLiClick() {
//     const newFoodArr = foods.map((food) => {
//       if (food.id === id) {
//         return {
//           ...food,
//           heatLevel: food.heatLevel + 1,
//         }
//       } else {
//         return food;
//       }
//     })
//   setFoods(newFoodArr)
//   }
// }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick = {() => handleRemoveFood(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
