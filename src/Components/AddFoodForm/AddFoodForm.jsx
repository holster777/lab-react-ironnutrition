import React, {useState} from 'react'
import { Input } from 'antd';

function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);


    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        const newFood = {name, image, calories, servings}
        props.addFood(newFood)

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);

    }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Name" value={name} type="text" onChange={handleNameInput}/>
            <Input name="image" placeholder="Image URL" value={image} type="text" onChange={handleImageInput}/>
            <Input name="calories" placeholder="Calories" value={calories} type="number" onChange={handleCaloriesInput}/>
            <Input name="servings" placeholder="Servings" value={servings} type="number" onChange={handleServingsInput}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddFoodForm